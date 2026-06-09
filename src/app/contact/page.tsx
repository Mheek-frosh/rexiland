'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlinePhone,
    HiOutlineQuestionMarkCircle,
    HiOutlineArrowRight,
    HiOutlineArrowUpRight,
    HiOutlineChatBubbleLeftRight
} from 'react-icons/hi2';
import Container from '@/components/Container';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            
            {/* SECTION 1: Contact Hero & Main Channels */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#EDF5FD] via-[#F5FAFE] to-white">
                
                {/* SVG Curve Grid Pattern Overlay */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg className="absolute left-1/2 top-0 h-[800px] w-[1400px] -translate-x-1/2 stroke-secondary/5 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse" x="50%">
                                <path d="M.5 80V.5H80" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" strokeWidth="0" />
                    </svg>
                </div>

                <Container className="text-center">
                    
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FFF9D4] text-zinc-800 border border-primary/40 shadow-sm"
                    >
                        Contact us
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 max-w-3xl mx-auto leading-tight"
                    >
                        We&apos;re always available to answer your questions
                    </motion.h1>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 text-left px-4">
                        
                        {/* Card 1: Engage Support */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white rounded-[2rem] p-8 md:p-10 border border-zinc-100 shadow-lg shadow-zinc-200/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#E8F1FF] text-secondary flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                                    <HiOutlinePhone className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Engage Support</h3>
                                <p className="text-zinc-500 mb-8 leading-relaxed text-sm md:text-base">
                                    Experiencing problems? Talk to us about it and we will get right on it.
                                </p>
                            </div>
                            <a 
                                href="mailto:support@rexipay.com" 
                                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all text-sm md:text-base"
                            >
                                <span>Chat with us</span>
                                <HiOutlineArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                        {/* Card 2: Find Answers */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white rounded-[2rem] p-8 md:p-10 border border-zinc-100 shadow-lg shadow-zinc-200/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#E8F1FF] text-secondary flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                                    <HiOutlineQuestionMarkCircle className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Find Answers</h3>
                                <p className="text-zinc-500 mb-8 leading-relaxed text-sm md:text-base">
                                    Experiencing problems? Talk to us about it and we will get right on it.
                                </p>
                            </div>
                            <a 
                                href="#faq" 
                                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all text-sm md:text-base"
                            >
                                <span>Visit help centre</span>
                                <HiOutlineArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                    </div>
                </Container>
            </section>

            {/* SECTION 2: Get quick support on popular issues */}
            <section className="py-20 md:py-28 bg-white border-t border-zinc-100">
                <Container>
                    
                    {/* Header */}
                    <div className="max-w-xl mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight">
                            Get quick support on popular issues
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Issues Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group bg-white rounded-[1.5rem] p-6 md:p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">Trouble signing in?</h3>
                                <p className="text-zinc-500 mb-6 leading-relaxed text-sm md:text-base">
                                    If you&apos;ve got trouble signing in, you might need to reset your password or recover your username. Click learn more for a step-by-step guide on how to manage your account.
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['Account', 'Sign In', 'Dashboard'].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF2FF] text-[#2F4FFF] border border-secondary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a 
                                href="#" 
                                className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm md:text-base group-hover:gap-2.5 transition-all duration-200 mt-auto"
                            >
                                <span>Learn more</span>
                                <HiOutlineArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                        {/* Issues Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group bg-white rounded-[1.5rem] p-6 md:p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">Need help with KYC?</h3>
                                <p className="text-zinc-500 mb-6 leading-relaxed text-sm md:text-base">
                                    Having trouble with the KYC verification process? Click below to learn about the different KYC levels, and the step-by-step requirements for each.
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['Verification', 'Transactions', 'Security'].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF2FF] text-[#2F4FFF] border border-secondary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a 
                                href="#" 
                                className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm md:text-base group-hover:gap-2.5 transition-all duration-200 mt-auto"
                            >
                                <span>Learn more</span>
                                <HiOutlineArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                        {/* Issues Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group bg-white rounded-[1.5rem] p-6 md:p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">Compromised account?</h3>
                                <p className="text-zinc-500 mb-6 leading-relaxed text-sm md:text-base">
                                    For any issues, including fraud, click the link below to submit a request, and our support team will respond to you as soon as possible.
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['Fraud', 'Security', 'Account'].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF2FF] text-[#2F4FFF] border border-secondary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a 
                                href="#" 
                                className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm md:text-base group-hover:gap-2.5 transition-all duration-200 mt-auto"
                            >
                                <span>Learn more</span>
                                <HiOutlineArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                    </div>

                    {/* Bottom Action Button */}
                    <div className="flex justify-center mt-14">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-secondary hover:bg-secondary/95 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-secondary/25 transition-all duration-200 text-sm md:text-base"
                        >
                            <span>Go to Rexipay support</span>
                            <HiOutlineArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
                        </motion.a>
                    </div>

                </Container>
            </section>

            {/* SECTION 3: Enjoy a business solution banner */}
            <section className="pb-20 md:pb-28 bg-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden bg-secondary text-white rounded-[2.5rem] py-16 md:py-24 px-8 md:px-16 text-center shadow-xl shadow-secondary/10"
                    >
                        {/* Wavy/Circular background decorative curves */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_-100px,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Enjoy a business solution designed to help you grow.
                            </h2>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#FFECA1] hover:bg-[#FFE370] text-[#121212] font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 text-sm md:text-base inline-flex items-center gap-2.5 hover:shadow-lg"
                            >
                                <span>Open an account</span>
                                <HiOutlineArrowRight className="w-4 h-4 stroke-[2.5]" />
                            </motion.a>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* FLOATING ACTION CHAT BUBBLE */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="fixed bottom-6 right-6 z-40 bg-secondary hover:bg-secondary/95 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-shadow hover:shadow-secondary/30"
                onClick={() => alert('Support chatbot opening soon!')}
            >
                <HiOutlineChatBubbleLeftRight className="w-7 h-7" />
            </motion.div>

        </div>
    );
};

export default ContactPage;
