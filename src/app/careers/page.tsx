'use client';

import Container from '@/components/Container';
import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineGlobeAmericas, HiOutlineArrowRight } from 'react-icons/hi2';

const CareersPage: React.FC = () => {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF9D4] border border-primary/30 text-zinc-800 text-xs font-semibold shadow-sm">
                            Careers at RexiPay
                        </div>

                        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                            Build the future of fintech infrastructure
                        </h1>

                        <p className="mt-6 text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                            Join our team and help create resilient payment solutions that keep businesses moving—online and offline.
                        </p>

                        <motion.a
                            href="#jobs"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/95 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg"
                        >
                            <span>View open positions</span>
                            <HiOutlineArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </Container>
            </section>

            {/* WHY JOIN US */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: HiOutlineBriefcase, title: 'Meaningful Impact', desc: 'Build products that solve real-world payment challenges for businesses across Africa.' },
                            { icon: HiOutlineUserGroup, title: 'Collaborative Culture', desc: 'Work with passionate engineers, designers, and product experts who care about innovation.' },
                            { icon: HiOutlineGlobeAmericas, title: 'Growth Opportunities', desc: 'Expand your skills with mentorship, learning budgets, and career progression paths.' }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-4">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-zinc-900 text-lg mb-2">{item.title}</h3>
                                <p className="text-zinc-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* OPEN POSITIONS */}
            <section id="jobs" className="py-16 md:py-24 bg-hero-background border-t border-zinc-100">
                <Container>
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-12">Open Positions</h2>

                    <div className="space-y-4 max-w-3xl">
                        {[
                            { role: 'Senior Frontend Engineer', dept: 'Engineering', location: 'Remote' },
                            { role: 'Product Designer', dept: 'Design', location: 'Lagos' },
                            { role: 'Backend Engineer', dept: 'Engineering', location: 'Remote' },
                            { role: 'Growth Marketing Manager', dept: 'Marketing', location: 'Nairobi' }
                        ].map((job, i) => (
                            <motion.div
                                key={job.role}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="bg-white rounded-xl p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-bold text-zinc-900">{job.role}</h3>
                                    <p className="text-zinc-500 text-sm">{job.dept} • {job.location}</p>
                                </div>
                                <button className="text-secondary font-semibold text-sm flex items-center gap-1">
                                    Apply <HiOutlineArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default CareersPage;