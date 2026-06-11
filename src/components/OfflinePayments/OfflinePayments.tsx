"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
    offscreen: {
        opacity: 0,
        y: 80
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.12,
        }
    }
};

const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const imageVariants = {
    offscreen: {
        opacity: 0,
        x: 60,
        scale: 0.95,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1.1,
            delay: 0.15,
        }
    },
};

const OfflinePayments: React.FC = () => {
    return (
        <section
            id="offline-payments"
            style={{ background: "var(--background)" }}
            className="py-12 lg:py-20"
        >
            <motion.div
                className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 lg:items-center"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Left: Text Content */}
                <div className="flex-1 w-full text-left">
                    <motion.div variants={childVariants} className="mb-4">
                        <span
                            style={{
                                background: "var(--primary)",
                                color: "#171717",
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.78rem",
                                letterSpacing: "0.08em",
                                padding: "0.3rem 0.9rem",
                                borderRadius: "999px",
                                display: "inline-block",
                                textTransform: "uppercase",
                            }}
                        >
                            Offline Payments
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={childVariants}
                        style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.9rem, 4vw, 2.7rem)",
                            lineHeight: 1.15,
                            color: "var(--foreground)",
                            marginBottom: "1.2rem",
                        }}
                    >
                        Transact anytime,<br />
                        <span style={{ color: "var(--secondary)" }}>even without signal.</span>
                    </motion.h2>

                    <motion.p
                        variants={childVariants}
                        style={{
                            color: "var(--foreground-accent)",
                            fontSize: "1.08rem",
                            lineHeight: 1.7,
                            maxWidth: "480px",
                            marginBottom: "2rem",
                        }}
                    >
                        Continue transacting even in low-connectivity environments
                        with secure offline payment technology. Your payments are
                        queued, encrypted, and synced the moment you&apos;re back online —
                        no missed transactions, no delays.
                    </motion.p>

                    <motion.div variants={childVariants}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                background: "var(--secondary)",
                                color: "#fff",
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                padding: "0.75rem 1.6rem",
                                borderRadius: "0.5rem",
                                borderLeft: "5px solid var(--primary)",
                                boxShadow: "0 4px 18px rgba(48, 79, 255, 0.22)",
                                cursor: "default",
                            }}
                        >
                            <span
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: "var(--primary)",
                                    display: "inline-block",
                                    flexShrink: 0,
                                }}
                            />
                            Works 100% offline — no internet required
                        </div>
                    </motion.div>
                </div>

                {/* Right: Image */}
                <motion.div
                    variants={imageVariants}
                    className="flex-1 w-full flex justify-center lg:justify-end"
                >
                    <div
                        style={{
                            borderRadius: "1.75rem",
                            overflow: "hidden",
                            boxShadow: "0 16px 48px rgba(48,79,255,0.13), 0 2px 8px rgba(0,0,0,0.08)",
                            maxWidth: "480px",
                            width: "100%",
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/images/afro.jpg"
                            alt="Offline Payments — transact anywhere"
                            width={480}
                            height={380}
                            quality={90}
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default OfflinePayments;
