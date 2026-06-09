'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    HiOutlineBuildingOffice2,
    HiOutlineCircleStack,
    HiOutlineCreditCard,
    HiOutlineBriefcase,
    HiOutlineScale,
    HiOutlineUserPlus,
    HiOutlineDevicePhoneMobile,
    HiOutlineGlobeAlt,
    HiOutlineLink,
    HiOutlineChartBar,
    HiOutlineDocumentText,
    HiOutlineSquares2X2,
    HiOutlineUsers,
    HiOutlinePaperAirplane,
    HiOutlineLightBulb,
    HiOutlineHandRaised,
    HiOutlineShieldCheck,
    HiOutlineCalendarDays,
    HiOutlineInformationCircle,
    HiOutlineAcademicCap,
    HiOutlineNewspaper,
    HiOutlineEnvelope,
    HiChevronDown,
    HiBars3,
    HiOutlineXMark,
    HiOutlineArrowRight
} from 'react-icons/hi2';
import Image from 'next/image';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import {
    businessProducts,
    personalProducts,
    companyItems,
    countries
} from '@/data/menuItems';

// Helper to resolve string icon names to React components
const IconResolver = ({ name, className }: { name: string; className?: string }) => {
    switch (name) {
        case "HiOutlineBuildingOffice2": return <HiOutlineBuildingOffice2 className={className} />;
        case "HiOutlineCircleStack": return <HiOutlineCircleStack className={className} />;
        case "HiOutlineCreditCard": return <HiOutlineCreditCard className={className} />;
        case "HiOutlineBriefcase": return <HiOutlineBriefcase className={className} />;
        case "HiOutlineScale": return <HiOutlineScale className={className} />;
        case "HiOutlineUserPlus": return <HiOutlineUserPlus className={className} />;
        case "HiOutlineDevicePhoneMobile": return <HiOutlineDevicePhoneMobile className={className} />;
        case "HiOutlineGlobeAlt": return <HiOutlineGlobeAlt className={className} />;
        case "HiOutlineLink": return <HiOutlineLink className={className} />;
        case "HiOutlineChartBar": return <HiOutlineChartBar className={className} />;
        case "HiOutlineDocumentText": return <HiOutlineDocumentText className={className} />;
        case "HiOutlineSquares2X2": return <HiOutlineSquares2X2 className={className} />;
        case "HiOutlineUsers": return <HiOutlineUsers className={className} />;
        case "HiOutlinePaperAirplane": return <HiOutlinePaperAirplane className={className} />;
        case "HiOutlineLightBulb": return <HiOutlineLightBulb className={className} />;
        case "HiOutlineHandRaised": return <HiOutlineHandRaised className={className} />;
        case "HiOutlineShieldCheck": return <HiOutlineShieldCheck className={className} />;
        case "HiOutlineCalendarDays": return <HiOutlineCalendarDays className={className} />;
        case "HiOutlineInformationCircle": return <HiOutlineInformationCircle className={className} />;
        case "HiOutlineAcademicCap": return <HiOutlineAcademicCap className={className} />;
        case "HiOutlineNewspaper": return <HiOutlineNewspaper className={className} />;
        case "HiOutlineEnvelope": return <HiOutlineEnvelope className={className} />;
        default: return null;
    }
};

const Header: React.FC = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [activeSegment, setActiveSegment] = useState<'business' | 'personal'>('business');
    const [activeProductCategory, setActiveProductCategory] = useState<string>('banking');
    const [activeCountry, setActiveCountry] = useState(countries[0]);
    
    // Desktop hover state tracking
    const [productHovered, setProductHovered] = useState(false);
    const [companyHovered, setCompanyHovered] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);

    // Mobile menu toggles
    const [isOpen, setIsOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

    // Dynamic background scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Set first category active when activeSegment changes
    useEffect(() => {
        const categories = activeSegment === 'business' ? businessProducts : personalProducts;
        if (categories.length > 0) {
            setActiveProductCategory(categories[0].key);
        }
    }, [activeSegment]);

    const activeProducts = activeSegment === 'business' ? businessProducts : personalProducts;
    const selectedCategoryDetails = activeProducts.find(c => c.key === activeProductCategory) || activeProducts[0];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMobileNavClick = (href: string) => {
        setIsOpen(false);
        router.push(href);
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm py-4' 
                    : 'bg-transparent py-6 md:py-8'
            }`}
        >
            <Container className="!px-6">
                <nav className="mx-auto flex justify-between items-center">
                    
                    {/* Left: Logo & Segment Toggle */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/favicon.ico" alt="Logo" width={28} height={28} className="min-w-fit w-7 h-7" />
                            <span className="manrope text-xl font-bold text-foreground cursor-pointer tracking-tight">
                                {siteDetails.siteName}
                            </span>
                        </Link>

                        {/* Segment Toggle (Business / Personal) */}
                        <div className="hidden lg:flex bg-zinc-100 p-1 rounded-full text-xs font-semibold border border-zinc-200/40">
                            <button
                                onClick={() => setActiveSegment('business')}
                                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                                    activeSegment === 'business'
                                        ? 'bg-secondary text-white shadow-sm font-semibold'
                                        : 'text-zinc-600 hover:text-zinc-900'
                                }`}
                            >
                                Business
                            </button>
                            <button
                                onClick={() => setActiveSegment('personal')}
                                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                                    activeSegment === 'personal'
                                        ? 'bg-secondary text-white shadow-sm font-semibold'
                                        : 'text-zinc-600 hover:text-zinc-900'
                                }`}
                            >
                                Personal
                            </button>
                        </div>
                    </div>

                    {/* Center: Desktop Nav Links */}
                    <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        
                        {/* Products Link with Hover Dropdown */}
                        <li 
                            className="relative py-2"
                            onMouseEnter={() => setProductHovered(true)}
                            onMouseLeave={() => setProductHovered(false)}
                        >
                            <button className="flex items-center gap-1 text-foreground hover:text-secondary font-medium transition-colors focus:outline-none">
                                Products
                                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${productHovered ? 'rotate-180 text-secondary' : 'text-zinc-400'}`} />
                            </button>

                            {/* Dual-Pane Dropdown Menu */}
                            <AnimatePresence>
                                {productHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15, ease: 'easeOut' }}
                                        className="absolute top-full left-1/2 -translate-x-1/3 mt-2 w-[760px] bg-white border border-zinc-100 shadow-xl rounded-2xl overflow-hidden z-50 flex"
                                    >
                                        {/* Left pane: Categories */}
                                        <div className="w-[280px] bg-zinc-50/70 p-5 border-r border-zinc-100 flex flex-col gap-1">
                                            {activeProducts.map((category) => (
                                                <button
                                                    key={category.key}
                                                    onMouseEnter={() => setActiveProductCategory(category.key)}
                                                    className={`w-full text-left p-3 rounded-xl transition-all ${
                                                        activeProductCategory === category.key
                                                            ? 'bg-secondary/10 text-secondary shadow-sm font-semibold border-l-4 border-secondary pl-3'
                                                            : 'text-zinc-700 hover:bg-zinc-100/70 pl-2'
                                                    }`}
                                                >
                                                    <div className="text-sm">{category.title}</div>
                                                    <div className={`text-xs mt-0.5 font-normal truncate ${
                                                        activeProductCategory === category.key ? 'text-secondary/80' : 'text-zinc-400'
                                                    }`}>
                                                        {category.description}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>

                                        {/* Right pane: Sub-items */}
                                        <div className="flex-1 p-6 bg-white min-h-[300px] flex flex-col gap-4">
                                            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                                                {selectedCategoryDetails?.title} Services
                                            </div>
                                            <div className="grid grid-cols-1 gap-3">
                                                {selectedCategoryDetails?.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.title}
                                                        href={subItem.url}
                                                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                                            <IconResolver name={subItem.icon} className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-bold text-zinc-800 group-hover:text-secondary transition-colors">
                                                                    {subItem.title}
                                                                </span>
                                                                {subItem.comingSoon && (
                                                                    <span className="text-[10px] font-semibold bg-primary/20 text-yellow-800 border border-primary/30 px-2 py-0.5 rounded-full">
                                                                        Coming soon
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-xs text-zinc-500 mt-0.5 group-hover:text-zinc-600">
                                                                {subItem.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* Company Link with Dropdown */}
                        <li 
                            className="relative py-2"
                            onMouseEnter={() => setCompanyHovered(true)}
                            onMouseLeave={() => setCompanyHovered(false)}
                        >
                            <button className="flex items-center gap-1 text-foreground hover:text-secondary font-medium transition-colors focus:outline-none">
                                Company
                                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${companyHovered ? 'rotate-180 text-secondary' : 'text-zinc-400'}`} />
                            </button>

                            {/* Company Dropdown Card */}
                            <AnimatePresence>
                                {companyHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15, ease: 'easeOut' }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white border border-zinc-100 shadow-xl rounded-2xl p-4 z-50 flex flex-col gap-1"
                                    >
                                        {companyItems.map((companyItem) => (
                                            <Link
                                                key={companyItem.title}
                                                href={companyItem.url}
                                                className="group flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-600 flex items-center justify-center shrink-0 group-hover:bg-secondary/15 group-hover:text-secondary transition-all">
                                                    <IconResolver name={companyItem.icon} className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-bold text-zinc-800 group-hover:text-secondary transition-colors">
                                                            {companyItem.title}
                                                        </span>
                                                        {companyItem.badge && (
                                                            <span className="text-[9px] font-semibold bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                                                                {companyItem.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-zinc-500 mt-0.5">
                                                        {companyItem.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        <li>
                            <Link href="/about" className="text-foreground hover:text-secondary transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-foreground hover:text-secondary transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="#blog" className="text-foreground hover:text-secondary transition-colors">
                                Blog
                            </Link>
                        </li>
                    </ul>

                    {/* Right: Actions (Sign In & Country Flag) */}
                    <div className="hidden md:flex items-center space-x-4">
                        
                        {/* Sign In button */}
                        <Link 
                            href="#cta" 
                            className="group flex items-center gap-2 text-black bg-primary hover:bg-primary-accent px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
                        >
                            <span>Sign in</span>
                            <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        {/* Country Flag Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setCountryOpen(!countryOpen)}
                                className="flex items-center gap-1.5 p-2 rounded-full border border-zinc-200/60 bg-zinc-50 hover:bg-zinc-100 text-foreground transition-all focus:outline-none"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={activeCountry.flagUrl} alt={activeCountry.name} width={20} height={15} className="w-5 h-auto rounded-sm object-cover select-none" />
                                <HiChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${countryOpen ? 'rotate-180' : ''} text-zinc-500`} />
                            </button>

                            <AnimatePresence>
                                {countryOpen && (
                                    <>
                                        {/* Invisible click backdrop */}
                                        <div className="fixed inset-0 z-40" onClick={() => setCountryOpen(false)} />
                                        
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.1 }}
                                            className="absolute right-0 mt-2 w-[160px] bg-white border border-zinc-100 shadow-xl rounded-xl p-1.5 z-50 flex flex-col gap-0.5"
                                        >
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    onClick={() => {
                                                        setActiveCountry(country);
                                                        setCountryOpen(false);
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                                                        activeCountry.code === country.code
                                                            ? 'bg-secondary/10 text-secondary font-semibold'
                                                            : 'text-zinc-700 hover:bg-zinc-50'
                                                    }`}
                                                >
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={country.flagUrl} alt={country.name} width={20} height={15} className="w-5 h-auto rounded-sm object-cover" />
                                                    <span>{country.name}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile: Hamburger & Country */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Quick Country Indicator on Mobile */}
                        <button
                            onClick={() => {
                                const currentIndex = countries.findIndex(c => c.code === activeCountry.code);
                                const nextIndex = (currentIndex + 1) % countries.length;
                                setActiveCountry(countries[nextIndex]);
                            }}
                            className="flex items-center justify-center p-2 rounded-full border border-zinc-200 bg-white w-9 h-9 shadow-sm overflow-hidden"
                            title="Toggle Country"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={activeCountry.flagUrl} alt={activeCountry.name} width={28} height={28} className="w-full h-full object-cover" />
                        </button>

                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary hover:bg-primary-accent text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-sm"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-5 w-5" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white border-b border-zinc-100 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 pt-4 pb-8 px-6">
                            
                            {/* Mobile Business/Personal Toggle */}
                            <div className="flex bg-zinc-100 p-1 rounded-full text-xs font-semibold border border-zinc-200/40 w-fit">
                                <button
                                    onClick={() => setActiveSegment('business')}
                                    className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                                        activeSegment === 'business'
                                            ? 'bg-secondary text-white shadow-sm'
                                            : 'text-zinc-600'
                                    }`}
                                >
                                    Business
                                </button>
                                <button
                                    onClick={() => setActiveSegment('personal')}
                                    className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                                        activeSegment === 'personal'
                                            ? 'bg-secondary text-white shadow-sm'
                                            : 'text-zinc-600'
                                    }`}
                                >
                                    Personal
                                </button>
                            </div>

                            <ul className="flex flex-col space-y-3 font-medium">
                                
                                {/* Collapsible Mobile Products */}
                                <li className="border-b border-zinc-50 pb-2">
                                    <button 
                                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                        className="w-full flex justify-between items-center py-1.5 text-zinc-800 hover:text-secondary text-left font-semibold"
                                    >
                                        <span>Products</span>
                                        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {mobileProductsOpen && (
                                        <div className="pl-3 mt-2 flex flex-col gap-3 border-l-2 border-zinc-100">
                                            {activeProducts.map(category => (
                                                <div key={category.key} className="flex flex-col gap-2">
                                                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mt-1">
                                                        {category.title}
                                                    </div>
                                                    <div className="flex flex-col gap-2 pl-1.5">
                                                        {category.items.map(subItem => (
                                                            <Link
                                                                key={subItem.title}
                                                                href={subItem.url}
                                                                onClick={toggleMenu}
                                                                className="flex items-center gap-3 py-1 hover:text-secondary text-sm"
                                                            >
                                                                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                                                    <IconResolver name={subItem.icon} className="w-4 h-4" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-1.5">
                                                                        <span className="font-semibold text-zinc-700 text-xs truncate">
                                                                            {subItem.title}
                                                                        </span>
                                                                        {subItem.comingSoon && (
                                                                            <span className="text-[8px] bg-primary/20 text-yellow-800 border border-primary/20 px-1 rounded-full shrink-0">
                                                                                Soon
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>

                                {/* Collapsible Mobile Company */}
                                <li className="border-b border-zinc-50 pb-2">
                                    <button 
                                        onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                                        className="w-full flex justify-between items-center py-1.5 text-zinc-800 hover:text-secondary text-left font-semibold"
                                    >
                                        <span>Company</span>
                                        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {mobileCompanyOpen && (
                                        <div className="pl-3 mt-2 flex flex-col gap-2.5 border-l-2 border-zinc-100">
                                            {companyItems.map(companyItem => (
                                                <Link
                                                    key={companyItem.title}
                                                    href={companyItem.url}
                                                    onClick={toggleMenu}
                                                    className="flex items-center gap-3 py-1 hover:text-secondary text-sm"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-600 flex items-center justify-center shrink-0">
                                                        <IconResolver name={companyItem.icon} className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-zinc-700 text-xs flex items-center gap-1.5">
                                                            <span>{companyItem.title}</span>
                                                            {companyItem.badge && (
                                                                <span className="text-[8px] bg-green-100 text-green-700 px-1 rounded">
                                                                    Hiring
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <Link href="/about" className="block py-1.5 text-zinc-800 hover:text-secondary" onClick={toggleMenu}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleMobileNavClick('/contact')}
                                        className="block w-full text-left py-1.5 text-zinc-800 hover:text-secondary font-medium"
                                    >
                                        Contact
                                    </button>
                                </li>
                                <li>
                                    <Link href="#blog" className="block py-1.5 text-zinc-800 hover:text-secondary" onClick={toggleMenu}>
                                        Blog
                                    </Link>
                                </li>
                            </ul>

                            {/* Mobile CTA */}
                            <div className="pt-2">
                                <Link 
                                    href="#cta" 
                                    className="flex items-center justify-center gap-2 text-black bg-primary hover:bg-primary-accent px-6 py-3 rounded-full font-semibold transition-colors shadow-sm w-full" 
                                    onClick={toggleMenu}
                                >
                                    <span>Sign in</span>
                                    <HiOutlineArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
