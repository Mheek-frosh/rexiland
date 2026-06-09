export interface IDropdownSubItem {
    title: string;
    description: string;
    icon: string; // React-icons name, e.g. "HiOutlineBriefcase"
    url: string;
    comingSoon?: boolean;
}

export interface IDropdownCategory {
    title: string;
    description: string;
    key: string;
    items: IDropdownSubItem[];
}

export const businessProducts: IDropdownCategory[] = [
    {
        title: "Banking",
        description: "Business and personal banking accounts",
        key: "banking",
        items: [
            {
                title: "Business Accounts",
                description: "Open a checking account for your business operations",
                icon: "HiOutlineBuildingOffice2",
                url: "#business-accounts"
            },
            {
                title: "High-Yield Deposits",
                description: "Earn competitive interest on business savings and funds",
                icon: "HiOutlineCircleStack",
                url: "#high-yield-deposits"
            },
            {
                title: "Corporate Cards",
                description: "Issue physical & virtual cards to your team with custom controls",
                icon: "HiOutlineCreditCard",
                url: "#corporate-cards"
            }
        ]
    },
    {
        title: "Credit",
        description: "Business and individual loans",
        key: "credit",
        items: [
            {
                title: "Working Capital Loans",
                description: "Flexible loans that help your business grow and meet demand",
                icon: "HiOutlineBriefcase",
                url: "#working-capital-loans"
            },
            {
                title: "Overdraft",
                description: "Keep your business going, even when money is low.",
                icon: "HiOutlineScale",
                url: "#overdraft",
                comingSoon: true
            },
            {
                title: "Salary Advance",
                description: "Provide short-term credit advances for your employees.",
                icon: "HiOutlineUserPlus",
                url: "#salary-advance",
                comingSoon: true
            }
        ]
    },
    {
        title: "Payments",
        description: "Accept payments from anywhere",
        key: "payments",
        items: [
            {
                title: "POS Terminals",
                description: "Accept physical cards and transfer payments instantly at your retail store",
                icon: "HiOutlineDevicePhoneMobile",
                url: "#pos-terminals"
            },
            {
                title: "Online Checkout",
                description: "Integrate our secure payment gateway into your website or app",
                icon: "HiOutlineGlobeAlt",
                url: "#online-checkout"
            },
            {
                title: "Payment Links",
                description: "Share a link to get paid via chat, email, or social media",
                icon: "HiOutlineLink",
                url: "#payment-links"
            }
        ]
    },
    {
        title: "Business Management",
        description: "Easy business money management & reports",
        key: "management",
        items: [
            {
                title: "Expense Management",
                description: "Track, categorize, and manage company spending in real-time",
                icon: "HiOutlineChartBar",
                url: "#expense-management"
            },
            {
                title: "Invoicing & Receipts",
                description: "Generate and send professional, automated invoices and receipts",
                icon: "HiOutlineDocumentText",
                url: "#invoicing"
            },
            {
                title: "Sub-accounts",
                description: "Manage multiple retail outlets, departments, or branches easily",
                icon: "HiOutlineSquares2X2",
                url: "#sub-accounts"
            }
        ]
    }
];

export const personalProducts: IDropdownCategory[] = [
    {
        title: "Banking",
        description: "Personal digital banking & savings",
        key: "banking",
        items: [
            {
                title: "Savings Accounts",
                description: "Save with high interest, zero maintenance fees, and automated targets",
                icon: "HiOutlineCircleStack",
                url: "#personal-savings"
            },
            {
                title: "Debit Cards",
                description: "Spend locally and globally with instant transaction alerts",
                icon: "HiOutlineCreditCard",
                url: "#personal-cards"
            },
            {
                title: "Joint Accounts",
                description: "Manage money together with friends, family, or your partner",
                icon: "HiOutlineUsers",
                url: "#joint-accounts"
            }
        ]
    },
    {
        title: "Payments",
        description: "Transfer and receive money instantly",
        key: "payments",
        items: [
            {
                title: "Instant Transfers",
                description: "Send money to any bank account for free, instantly and securely",
                icon: "HiOutlinePaperAirplane",
                url: "#instant-transfers"
            },
            {
                title: "Bill Payments",
                description: "Pay utility bills, buy airtime, and renew subscriptions in seconds",
                icon: "HiOutlineLightBulb",
                url: "#bill-payments"
            },
            {
                title: "Request Money",
                description: "Ask friends or family for money with a quick personal payment link",
                icon: "HiOutlineHandRaised",
                url: "#request-money"
            }
        ]
    },
    {
        title: "Security & Planning",
        description: "Keep your funds safe and plan ahead",
        key: "security",
        items: [
            {
                title: "Fraud Protection",
                description: "AI-powered security alerts and instant card freezing in-app",
                icon: "HiOutlineShieldCheck",
                url: "#fraud-protection"
            },
            {
                title: "Budget Planner",
                description: "Track your monthly spending habits and automatically hit savings goals",
                icon: "HiOutlineCalendarDays",
                url: "#budget-planner"
            }
        ]
    }
];

export interface ICompanyItem {
    title: string;
    description: string;
    icon: string;
    url: string;
    badge?: string;
}

export const companyItems: ICompanyItem[] = [
    {
        title: "About Us",
        description: "Our mission, vision, and team story of simplified payments",
        icon: "HiOutlineInformationCircle",
        url: "#about"
    },
    {
        title: "Careers",
        description: "Join our team and build the future of fintech infrastructure",
        icon: "HiOutlineAcademicCap",
        url: "#careers",
        badge: "We're Hiring!"
    },
    {
        title: "Press & Media",
        description: "Read latest company updates, logos, and press resources",
        icon: "HiOutlineNewspaper",
        url: "#press"
    },
    {
        title: "Contact Us",
        description: "Get in touch with our friendly 24/7 customer support team",
        icon: "HiOutlineEnvelope",
        url: "/contact"
    }
];

export const countries = [
    { name: "Nigeria", code: "NG", flag: "🇳🇬", flagUrl: "https://flagcdn.com/w40/ng.png" },
    { name: "Ghana", code: "GH", flag: "🇬🇭", flagUrl: "https://flagcdn.com/w40/gh.png" },
    { name: "Kenya", code: "KE", flag: "🇰🇪", flagUrl: "https://flagcdn.com/w40/ke.png" },
    { name: "South Africa", code: "ZA", flag: "🇿🇦", flagUrl: "https://flagcdn.com/w40/za.png" }
];