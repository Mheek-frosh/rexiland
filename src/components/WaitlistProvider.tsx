'use client';

import { createContext, FormEvent, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineCheck, HiOutlineEnvelope, HiOutlineXMark } from 'react-icons/hi2';

type WaitlistContextValue = { openWaitlist: () => void };

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if (!context) throw new Error('useWaitlist must be used within WaitlistProvider');
    return context;
};

export default function WaitlistProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'form' | 'submitting' | 'success'>('form');
    const [error, setError] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const close = () => {
        setIsOpen(false);
        window.setTimeout(() => {
            setStatus('form');
            setEmail('');
            setError('');
        }, 200);
    };

    const openWaitlist = () => {
        setIsOpen(true);
        setStatus('form');
        setError('');
    };

    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.setTimeout(() => inputRef.current?.focus(), 100);
        const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && close();
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setStatus('submitting');
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'We could not add you to the waitlist. Please try again.');
            setStatus('success');
        } catch (err) {
            setStatus('form');
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    };

    return (
        <WaitlistContext.Provider value={{ openWaitlist }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        aria-labelledby="waitlist-title" role="dialog" aria-modal="true"
                    >
                        <motion.button aria-label="Close waitlist" className="absolute inset-0 cursor-default bg-zinc-950/55 backdrop-blur-sm" onClick={close} />
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                            className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
                        >
                            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
                            <button type="button" onClick={close} className="absolute right-5 top-5 rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900" aria-label="Close waitlist">
                                <HiOutlineXMark className="h-5 w-5" />
                            </button>
                            {status === 'success' ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative py-5 text-center">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1, stiffness: 260, damping: 16 }} className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                        <motion.div initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.35 }}><HiOutlineCheck className="h-11 w-11" /></motion.div>
                                    </motion.div>
                                    <h2 id="waitlist-title" className="mt-6 manrope text-3xl font-bold tracking-tight text-zinc-950">You&apos;re on the list!</h2>
                                    <p className="mt-3 text-base leading-7 text-zinc-600">We&apos;ve sent a confirmation to <span className="font-semibold text-zinc-900">{email}</span>. We&apos;ll be in touch when RexiPay is ready for you.</p>
                                    <button type="button" onClick={close} className="mt-7 w-full rounded-full bg-secondary px-5 py-3.5 font-bold text-white transition hover:bg-secondary/90">Done</button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary"><HiOutlineEnvelope className="h-6 w-6" /></div>
                                    <p className="relative mt-6 text-sm font-bold uppercase tracking-[0.16em] text-secondary">Early access</p>
                                    <h2 id="waitlist-title" className="relative mt-2 manrope text-3xl font-bold tracking-tight text-zinc-950">Join the RexiPay waitlist</h2>
                                    <p className="relative mt-3 text-base leading-7 text-zinc-600">We&apos;re putting the finishing touches on RexiPay. Leave your email and we&apos;ll let you know as soon as access opens.</p>
                                    <form onSubmit={submit} className="relative mt-7">
                                        <label htmlFor="waitlist-email" className="mb-2 block text-sm font-semibold text-zinc-700">Email address</label>
                                        <input ref={inputRef} id="waitlist-email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" required autoComplete="email" placeholder="you@example.com" disabled={status === 'submitting'} className="h-13 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10 disabled:cursor-not-allowed disabled:bg-zinc-50" />
                                        {error && <p role="alert" className="mt-3 text-sm font-medium text-red-600">{error}</p>}
                                        <button type="submit" disabled={status === 'submitting'} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3.5 font-bold text-white shadow-lg shadow-secondary/20 transition hover:bg-secondary/90 disabled:cursor-wait disabled:opacity-70">
                                            {status === 'submitting' ? 'Adding you…' : <>Join the waitlist <HiOutlineArrowRight className="h-5 w-5" /></>}
                                        </button>
                                    </form>
                                    <p className="relative mt-4 text-center text-xs leading-5 text-zinc-500">No spam—just one confirmation and your early-access invitation.</p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </WaitlistContext.Provider>
    );
}
