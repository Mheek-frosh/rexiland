"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiTrendingUp, FiLayers, FiZap } from "react-icons/fi";

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
        x: 50,
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
        x: -60,
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

const CryptoLiquidity: React.FC = () => {
    return (
        <section
            id="crypto-liquidity"
            style={{ background: "var(--background)" }}
            className="py-12 lg:py-24"
        >
            <motion.div
                className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-16 lg:items-center"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Right: Text Content */}
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
                            Instant Liquidity
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
                        Instant Crypto Liquidity<br />
                        <span style={{ color: "var(--secondary)" }}>Convert to cash instantly.</span>
                    </motion.h2>

                    <motion.p
                        variants={childVariants}
                        style={{
                            color: "var(--foreground-accent)",
                            fontSize: "1.08rem",
                            lineHeight: 1.7,
                            maxWidth: "520px",
                            marginBottom: "2rem",
                        }}
                    >
                        Receive cryptocurrency, sell digital assets, and convert crypto to cash with fast settlement. 
                        Bring the power of high-speed digital finance to your everyday bank transfers with absolute convenience.
                    </motion.p>

                    {/* Features list */}
                    <div className="flex flex-col gap-6 w-full max-w-lg mb-8">
                        <motion.div variants={childVariants} className="flex gap-4 items-start">
                            <div 
                                style={{
                                    background: "rgba(48, 79, 255, 0.1)",
                                    color: "var(--secondary)",
                                    padding: "0.6rem",
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <FiZap size={22} />
                            </div>
                            <div>
                                <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>
                                    Fast & Reliable Settlement
                                </h4>
                                <p style={{ color: "var(--foreground-accent)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                    Sell your crypto assets and receive local cash straight to your bank account in minutes.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={childVariants} className="flex gap-4 items-start">
                            <div 
                                style={{
                                    background: "rgba(48, 79, 255, 0.1)",
                                    color: "var(--secondary)",
                                    padding: "0.6rem",
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <FiLayers size={22} />
                            </div>
                            <div>
                                <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>
                                    Multi-Asset Operations
                                </h4>
                                <p style={{ color: "var(--foreground-accent)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                    Support for major cryptocurrencies. Diversify your wallet and liquidate anytime you need.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={childVariants} className="flex gap-4 items-start">
                            <div 
                                style={{
                                    background: "rgba(48, 79, 255, 0.1)",
                                    color: "var(--secondary)",
                                    padding: "0.6rem",
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <FiTrendingUp size={22} />
                            </div>
                            <div>
                                <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>
                                    Competitive Pricing
                                </h4>
                                <p style={{ color: "var(--foreground-accent)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                    Benefit from ultra-competitive conversion rates and crystal-clear transaction pricing without hidden cuts.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Left: Image */}
                <motion.div
                    variants={imageVariants}
                    className="flex-1 w-full flex justify-center lg:justify-start"
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
                            src="/images/mockup-2.webp"
                            alt="Instant Crypto Liquidity Dashboard"
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

export default CryptoLiquidity;
