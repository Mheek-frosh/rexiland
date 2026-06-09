'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import { motion } from 'framer-motion';
import { HiOutlineCalendarDays, HiOutlineUser, HiOutlineArrowRight } from 'react-icons/hi2';

const BlogPage: React.FC = () => {
    const posts = [
        { title: 'Offline Payments: The Future of Transaction Resilience', excerpt: 'How businesses can maintain revenue flow even during network outages.', date: 'June 5, 2026', author: 'Alex Chen' },
        { title: 'Crypto-to-Cash: Instant Liquidity Explained', excerpt: 'Understanding how digital assets can seamlessly convert to local currency.', date: 'May 28, 2026', author: 'Maria Silva' },
        { title: 'Building Financial Infrastructure for Emerging Markets', excerpt: 'The challenges and opportunities in Africa\'s fintech landscape.', date: 'May 15, 2026', author: 'David Okafor' },
        { title: 'Security First: Protecting Digital Transactions', excerpt: 'Our approach to fraud prevention and fund security.', date: 'April 30, 2026', author: 'Sarah Johnson' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* HERO */}
            <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-gradient-to-b from-[#EDF5FD] via-[#F5FAFE] to-white">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(47,79,255,0.18)_0%,transparent_60%)]" />
                </div>

                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                            Insights & Updates
                        </h1>
                        <p className="mt-6 text-zinc-600 text-base md:text-lg leading-relaxed">
                            The latest from RexiPay on payments, security, and financial innovation.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* BLOG POSTS */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post, i) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div className="relative h-48 bg-zinc-100">
                                    <Image
                                        src={`/images/blog-${i + 1}.webp`}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <HiOutlineCalendarDays className="w-3.5 h-3.5" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <HiOutlineUser className="w-3.5 h-3.5" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <h2 className="font-bold text-zinc-900 text-xl mb-2 group-hover:text-secondary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-zinc-600 text-sm mb-4">{post.excerpt}</p>
                                    <a href="#" className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm">
                                        Read article <HiOutlineArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default BlogPage;