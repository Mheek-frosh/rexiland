'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiOutlineArrowRight,
    HiOutlineEnvelope,
    HiOutlineLockClosed,
    HiOutlineUser,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineShieldCheck,
    HiOutlineBolt,
    HiOutlineCheckCircle,
    HiOutlineDevicePhoneMobile,
    HiOutlineChartBar
} from 'react-icons/hi2';

type AuthMode = 'signin' | 'signup';

const AuthPage: React.FC = () => {
    const [mode, setMode] = useState<AuthMode>('signin');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(
            mode === 'signin'
                ? 'Sign in form is ready for your authentication flow.'
                : 'Create account form is ready for your authentication flow.'
        );
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#EDF5FD]">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[720px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(48,79,255,0.18),transparent_58%)]" />
                <div className="absolute bottom-0 right-0 h-[520px] w-[720px] bg-[radial-gradient(circle_at_80%_100%,rgba(254,216,53,0.22),transparent_62%)]" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <motion.aside
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        className="hidden overflow-hidden rounded-[2.5rem] bg-[#050A02] p-8 text-white shadow-2xl shadow-secondary/10 lg:block lg:p-12"
                    >
                        <div className="relative flex min-h-[720px] flex-col justify-between">
                            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_55%,transparent_100%)]" />
                            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(48,79,255,0.42),transparent_32%),radial-gradient(circle_at_70%_72%,rgba(254,216,53,0.28),transparent_34%)]" />

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-xl font-bold">R</div>
                                    <div>
                                        <p className="manrope text-xl font-bold tracking-tight">RexiPay</p>
                                        <p className="text-sm text-zinc-400">Secure payments, everywhere</p>
                                    </div>
                                </div>

                                <div className="mt-20 max-w-xl">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
                                        <HiOutlineBolt className="text-primary" />
                                        Fast, secure access to your account
                                    </div>
                                    <h1 className="mt-6 manrope text-5xl font-bold leading-tight">
                                        One account for every payment moment.
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-zinc-300">
                                        Sign in to manage transfers, offline payments, merchant tools, and crypto liquidity from one trusted dashboard.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <FeatureCard
                                    icon={<HiOutlineShieldCheck />}
                                    title="Protected"
                                    text="Bank-grade security for every session."
                                />
                                <FeatureCard
                                    icon={<HiOutlineDevicePhoneMobile />}
                                    title="Offline ready"
                                    text="Keep business moving in low-connectivity areas."
                                />
                                <FeatureCard
                                    icon={<HiOutlineChartBar />}
                                    title="Insights"
                                    text="Track payments and liquidity in real time."
                                />
                            </div>

                            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-zinc-400">Live payment flow</p>
                                        <p className="mt-1 manrope text-2xl font-bold">NGN 2,450,000</p>
                                    </div>
                                    <div className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-zinc-950">
                                        +24.8%
                                    </div>
                                </div>
                                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-secondary to-primary" />
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <MiniStat label="Merchants" value="12.8k" />
                                    <MiniStat label="Countries" value="4" />
                                    <MiniStat label="Uptime" value="99.9%" />
                                </div>
                            </div>
                        </div>
                    </motion.aside>

                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="mx-auto w-full max-w-xl"
                    >
                        <div className="mb-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-secondary shadow-sm backdrop-blur">
                                <HiOutlineCheckCircle />
                                Welcome back
                            </div>
                            <h2 className="mt-5 manrope text-4xl font-bold tracking-tight text-zinc-950 lg:text-5xl">
                                {mode === 'signin' ? 'Sign in to RexiPay' : 'Create your account'}
                            </h2>
                            <p className="mt-4 text-zinc-600">
                                {mode === 'signin'
                                    ? 'Access your dashboard, payment tools, and account settings.'
                                    : 'Start accepting payments, sending transfers, and managing liquidity.'}
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-zinc-100 bg-white/90 p-5 shadow-2xl shadow-secondary/10 backdrop-blur sm:p-7">
                            <div className="mb-6 grid rounded-2xl bg-zinc-100 p-1">
                                <div className="grid grid-cols-2 gap-1">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMode('signin');
                                            setMessage('');
                                        }}
                                        className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                                            mode === 'signin'
                                                ? 'bg-white text-secondary shadow-sm'
                                                : 'text-zinc-500 hover:text-zinc-900'
                                        }`}
                                    >
                                        Sign in
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMode('signup');
                                            setMessage('');
                                        }}
                                        className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                                            mode === 'signup'
                                                ? 'bg-white text-secondary shadow-sm'
                                                : 'text-zinc-500 hover:text-zinc-900'
                                        }`}
                                    >
                                        Create account
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {mode === 'signin' ? (
                                    <motion.form
                                        key="signin"
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -16 }}
                                        transition={{ duration: 0.2 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <Input
                                            label="Email address"
                                            type="email"
                                            placeholder="you@example.com"
                                            icon={<HiOutlineEnvelope />}
                                            autoComplete="email"
                                        />

                                        <div>
                                            <div className="mb-2 flex items-center justify-between gap-3">
                                                <label className="text-sm font-semibold text-zinc-700">Password</label>
                                                <a href="/contact#faq" className="text-sm font-semibold text-secondary hover:text-secondary/80">
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <PasswordInput
                                                placeholder="Enter your password"
                                                icon={<HiOutlineLockClosed />}
                                                showPassword={showPassword}
                                                onToggle={() => setShowPassword((value) => !value)}
                                                autoComplete="current-password"
                                            />
                                        </div>

                                        <label className="flex items-center gap-3 text-sm text-zinc-600">
                                            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-secondary focus:ring-secondary" />
                                            Remember me for 30 days
                                        </label>

                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 text-base font-bold text-white shadow-lg shadow-secondary/25 transition hover:bg-secondary/90 hover:shadow-secondary/30"
                                        >
                                            Sign in <HiOutlineArrowRight />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.form
                                        key="signup"
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 16 }}
                                        transition={{ duration: 0.2 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <Input
                                            label="Full name"
                                            type="text"
                                            placeholder="Your full name"
                                            icon={<HiOutlineUser />}
                                            autoComplete="name"
                                        />
                                        <Input
                                            label="Email address"
                                            type="email"
                                            placeholder="you@example.com"
                                            icon={<HiOutlineEnvelope />}
                                            autoComplete="email"
                                        />
                                        <PasswordInput
                                            label="Password"
                                            placeholder="Create a strong password"
                                            icon={<HiOutlineLockClosed />}
                                            showPassword={showPassword}
                                            onToggle={() => setShowPassword((value) => !value)}
                                            autoComplete="new-password"
                                        />
                                        <PasswordInput
                                            label="Confirm password"
                                            placeholder="Confirm your password"
                                            icon={<HiOutlineLockClosed />}
                                            showPassword={showConfirmPassword}
                                            onToggle={() => setShowConfirmPassword((value) => !value)}
                                            autoComplete="new-password"
                                        />

                                        <label className="flex items-start gap-3 text-sm text-zinc-600">
                                            <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-secondary focus:ring-secondary" />
                                            <span>I agree to the Terms and Privacy Policy</span>
                                        </label>

                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 text-base font-bold text-white shadow-lg shadow-secondary/25 transition hover:bg-secondary/90 hover:shadow-secondary/30"
                                        >
                                            Create account <HiOutlineArrowRight />
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>

                            <div className="my-6 flex items-center gap-4">
                                <div className="h-px flex-1 bg-zinc-200" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">or continue with</span>
                                <div className="h-px flex-1 bg-zinc-200" />
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <SocialButton text="Google" />
                                <SocialButton text="Apple" />
                            </div>

                            {message && (
                                <div className="mt-5 rounded-2xl border border-secondary/15 bg-secondary/5 px-4 py-3 text-sm font-semibold text-secondary">
                                    {message}
                                </div>
                            )}

                            <p className="mt-6 text-center text-sm text-zinc-500">
                                {mode === 'signin' ? 'New to RexiPay?' : 'Already have an account?'}{' '}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMode(mode === 'signin' ? 'signup' : 'signin');
                                        setMessage('');
                                    }}
                                    className="font-bold text-secondary hover:text-secondary/80"
                                >
                                    {mode === 'signin' ? 'Create an account' : 'Sign in'}
                                </button>
                            </p>
                        </div>

                        <p className="mt-6 text-center text-sm text-zinc-500">
                            Protected by RexiPay security. Your information is encrypted and private.
                        </p>
                    </motion.section>
                </div>
            </div>
        </main>
    );
};

const Input: React.FC<{
    label: string;
    type: string;
    placeholder: string;
    icon: React.ReactNode;
    autoComplete?: string;
}> = ({ label, type, placeholder, icon, autoComplete }) => (
    <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-700">{label}</label>
        <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">{icon}</div>
            <input
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="h-12 w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
            />
        </div>
    </div>
);

const PasswordInput: React.FC<{
    label?: string;
    placeholder: string;
    icon: React.ReactNode;
    showPassword: boolean;
    onToggle: () => void;
    autoComplete?: string;
}> = ({ label, placeholder, icon, showPassword, onToggle, autoComplete }) => (
    <div>
        {label && <label className="mb-2 block text-sm font-semibold text-zinc-700">{label}</label>}
        <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">{icon}</div>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="h-12 w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-12 pr-12 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
            />
            <button
                type="button"
                onClick={onToggle}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-secondary"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
                {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
            </button>
        </div>
    </div>
);

const SocialButton: React.FC<{ text: string }> = ({ text }) => (
    <button
        type="button"
        className="flex h-12 items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 font-bold text-zinc-700 transition hover:border-secondary/40 hover:bg-secondary/5 hover:text-secondary"
    >
        {text === 'Google' ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="#4285F4" d="M23.766 12.2764c0-.8727-.0764-1.6989-.221-2.4947H12v4.709h6.6488c-.2875 1.5547-1.1728 2.8681-2.509 3.7581v3.0908h3.991c2.3384-2.1512 3.6292-5.3166 3.6292-9.0632Z" />
                <path fill="#34A853" d="M12 24c3.2403 0 5.9595-1.0766 7.9408-2.9104l-3.991-3.0908c-1.0766.72-2.4544 1.1475-3.9498 1.1475-2.8739 0-5.309-1.9409-6.1763-4.5455H1.725v3.198C3.7538 21.8365 7.6193 24 12 24Z" />
                <path fill="#FBBC05" d="M5.8237 14.6013a6.741 6.741 0 0 1 0-4.273V7.1303h-4.099a12.003 12.003 0 0 0 0 10.6585l4.099-3.1875Z" />
                <path fill="#EA4335" d="M12 4.8533c1.7664-.0264 3.4765.6464 4.7563 1.8779l3.552-3.552C18.1903 1.1872 15.1938 0 12 0 7.6193 0 3.7538 2.1635 1.725 5.3183l4.0987 3.1875C6.691 6.8952 9.1261 4.8533 12 4.8533Z" />
            </svg>
        ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="currentColor" d="M17.05 2.12c-1.01.07-2.24.68-2.97 1.54-.82.94-1.54 2.18-1.35 3.38 1.13.09 2.29-.58 2.99-1.42.74-.87 1.24-2.07 1.33-3.5Zm2.35 5.02c-1.57-.07-3.09.84-3.92.84-.84 0-2.14-.82-3.51-.8-1.81.03-3.48 1.05-4.42 2.68-1.89 3.28-.48 8.15 1.36 10.82.9 1.3 1.97 2.77 3.39 2.72 1.36-.05 1.88-.87 3.52-.87 1.64 0 2.11.87 3.54.84 1.46-.03 2.39-1.32 3.28-2.63 1.03-1.51 1.45-2.98 1.47-3.06-.03-.01-2.82-1.08-2.83-4.28-.01-2.67 2.19-3.95 2.24-3.98-1.22-1.78-3.11-2.05-3.77-2.08h-.15ZM12.03 5.38c.76-2.62 3.13-4.44 5.23-4.23.64 2.85-2.52 5.11-5.23 4.23Z" />
            </svg>
        )}
        {text}
    </button>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
            {icon}
        </div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
    </div>
);

const MiniStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-sm text-zinc-400">{label}</p>
        <p className="mt-1 manrope text-xl font-bold">{value}</p>
    </div>
);

export default AuthPage;
