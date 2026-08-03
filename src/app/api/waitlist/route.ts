import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.WAITLIST_FROM_EMAIL;
        const audienceId = process.env.RESEND_AUDIENCE_ID;
        if (!apiKey || !from || !audienceId) {
            return NextResponse.json({ error: 'The waitlist email service is not configured yet. Please try again soon.' }, { status: 503 });
        }

        const contactResponse = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: normalizedEmail, unsubscribed: false }),
        });
        // An existing contact is already on the waitlist, so a confirmation can still be sent.
        if (!contactResponse.ok && contactResponse.status !== 409) throw new Error('Waitlist provider rejected the request');

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                from,
                to: [normalizedEmail],
                subject: 'You’re on the RexiPay waitlist',
                html: `<div style="font-family:Arial,sans-serif;color:#171717;line-height:1.6"><h1 style="color:#172FC7">Welcome to the RexiPay waitlist</h1><p>Thanks for your interest in RexiPay. You’ve been added to our early-access list.</p><p>We’ll email you as soon as we’re ready to welcome you in.</p><p>— The RexiPay team</p></div>`,
            }),
        });
        if (!resendResponse.ok) throw new Error('Email provider rejected the request');

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: 'We could not add you to the waitlist. Please try again.' }, { status: 500 });
    }
}
