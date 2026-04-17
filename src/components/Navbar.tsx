'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        router.push(href);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl shadow-black/30'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Floating Premium Logo */}
                        <Link
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className="relative z-10 h-full flex items-start pt-0"
                        >
                            <motion.div
                                initial={{ y: -60, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    rotate: [0, -8, 6, -3, 2, 0]
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1],
                                    rotate: { delay: 0.6, duration: 0.6 }
                                }}
                                className="relative w-20 h-24 md:w-28 md:h-32 bg-background/80 backdrop-blur-2xl border-x border-b border-gold/30 rounded-b-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] flex items-center justify-center p-5 group hover:border-gold transition-all duration-500 hover:shadow-gold/10 hover:shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 rounded-b-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/LOGO.svg"
                                        alt="GB Agri Impex Limited Logo"
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`text-sm font-semibold tracking-wider transition-colors duration-300 relative group py-1 ${isActive ? 'text-white' : 'text-muted hover:text-white'}`}
                                    >
                                        {link.label}
                                        <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-gold transition-all duration-300 ease-out rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact"
                                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gold text-background font-bold text-sm rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(211,167,44,0.45)] transition-all duration-300 active:scale-95"
                            >
                                Get Quote
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {mobileOpen ? (
                                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <X className="w-5 h-5 text-gold" />
                                        </motion.span>
                                    ) : (
                                        <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <Menu className="w-5 h-5 text-white" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu — Fullscreen */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-2xl flex flex-col"
                    >
                        {/* Top bar spacer */}
                        <div className="h-16" />

                        <div className="flex-1 flex flex-col justify-center px-8 py-12">
                            {/* Decorative accent */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

                            <div className="relative z-10 flex flex-col gap-2 mb-10">
                                {navLinks.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.button
                                            key={link.label}
                                            initial={{ opacity: 0, x: -24 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -24 }}
                                            transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                                            onClick={() => handleNavClick(link.href)}
                                            className={`text-left text-3xl font-bold transition-colors duration-300 py-3 border-b border-border/30 last:border-b-0 ${isActive ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
                                            style={{ fontFamily: 'Playfair Display, serif' }}
                                        >
                                            {link.label}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                                onClick={() => handleNavClick('/contact')}
                                className="w-full py-4 bg-gold text-background font-bold text-lg rounded-2xl hover:bg-gold-light transition-colors active:scale-95"
                            >
                                Get a Quote
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
