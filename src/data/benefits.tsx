import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Financial Infrastructure Without Limits",
        description: "RexiPay powers seamless online and offline transactions, ensuring payments continue even when traditional banking infrastructure fails.",
        bullets: [
            {
                title: "POS-Free & ATM-Free Transactions",
                description: "Access, transfer, and receive funds without expensive POS hardware or dependence on ATM networks.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Instant Crypto Liquidity",
                description: "Receive cryptocurrency, sell digital assets instantly, and convert crypto to cash with rapid settlement.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Secure Digital Finance Ecosystem",
                description: "A unified platform for payments, merchant services, transfers, and digital asset management, built with security and accessibility at its core.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mock1.webp"
    },
    {
        title: "Seamless Investing",
        description: "Start building wealth today, no financial degree required. Rexipay makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Micro-Investing",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Portfolios",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Rexipay employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mock1.webp"
    },
]