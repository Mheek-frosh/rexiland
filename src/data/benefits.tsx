import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Financial Infrastructure Without Limits",
        description: "Secure payments anytime, anywhere.",
        bullets: [
            {
                title: "POS-Free & ATM-Free Transactions",
                description: "No POS hardware or ATM needed.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Instant Crypto Liquidity",
                description: "Convert crypto to cash instantly.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Secure Digital Finance Ecosystem",
                description: "Payments, transfers, and asset management.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/m1.webp"
    },
    {
        title: "Seamless Investing",
        description: "Build wealth with ease.",
        bullets: [
            {
                title: "Micro-Investing",
                description: "Start with just $1.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Portfolios",
                description: "Strategies for any risk level.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track investments easily.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/convert.webp"
    },
    {
        title: "Bank-Grade Security",
        description: "Your funds protected at all levels.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Top-level data encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Crypto Asset Protection",
                description: "Blockchain security for crypto.",
                icon: <FiShield size={26} />
            },
            {
                title: "Anti-Theft Monitoring",
                description: "Real-time fraud alerts.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/secure.webp"
    },
]