'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const words = ['Peanuts', 'Sesame Seeds', 'Cumin Seeds', 'Fennel Seeds', 'Black Gram', 'Spices'];

const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '10K+', label: 'Metric Tons Exported' },
    { value: '100%', label: 'Quality Certified' },
    { value: '9+', label: 'Years Excellence' },
];

export default function HeroSection() {
    const [currentWord, setCurrentWord] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWord];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayed.length < word.length) {
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
        } else if (!isDeleting && displayed.length === word.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, currentWord]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-background.webp"
                    alt="Agricultural Background"
                    fill
                    priority
                    quality={90}
                    className="object-cover object-center sm:rounded-none rounded-b-[2.5rem]"
                />
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background" />
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(211,167,44,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(211,167,44,0.8) 1px, transparent 1px)`,
                        backgroundSize: '90px 90px',
                    }}
                />

                {/* Gradient mesh blobs */}
                <div className="absolute top-[-15%] left-[-8%] w-[55%] h-[55%] bg-gold/8 blur-[130px] rounded-full animate-float" />
                <div className="absolute bottom-[-8%] right-[-5%] w-[45%] h-[45%] bg-gold/5 blur-[100px] rounded-full" />

                {/* Grain noise */}
                <div className="absolute inset-0 bg-noise opacity-[0.025]" />

                {/* Floating gold particles */}
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${[70, 45, 110, 35, 85, 55, 95][i]}px`,
                            height: `${[70, 45, 110, 35, 85, 55, 95][i]}px`,
                            left: `${[8, 82, 23, 68, 48, 88, 35][i]}%`,
                            top: `${[18, 12, 72, 58, 38, 78, 55][i]}%`,
                            background: `radial-gradient(circle, rgba(211,167,44,${[0.09, 0.05, 0.065, 0.11, 0.04, 0.075, 0.05][i]}) 0%, transparent 70%)`,
                        }}
                        animate={{ y: [0, -25, 0], x: [0, 8, 0], scale: [1, 1.08, 1] }}
                        transition={{
                            duration: [7, 9, 8, 6, 10, 7, 8][i],
                            delay: [0, 1, 2, 0.5, 1.5, 2.5, 0.8][i],
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}

                {/* Decorative rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-gold/[0.05]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-full border border-gold/[0.03]" />
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-center px-6 md:px-10 max-w-6xl mx-auto pt-24 pb-16">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/8 mb-8 backdrop-blur-sm"
                >
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold text-sm font-medium tracking-wide">
                        Trusted Agricultural Exporter — Since 2015
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-[1.04] mb-7 text-white"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                    Premium Quality
                    <br />
                    <span className="text-gold-gradient">Agricultural Exports</span>
                </motion.h1>

                {/* Typewriter subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xl sm:text-1xl md:text-2xl font-medium text-muted mb-7"
                >
                    <span className="text-white/80">Supplying</span>
                    <span className="text-white text-left font-semibold inline-flex items-center">
                        {displayed}
                        <span className="inline-block w-0.5 h-6 sm:h-7 bg-gold ml-1 animate-pulse" />
                    </span>
                    <span className="text-white/80">to the World</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    From the fertile fields of India to global markets — delivering exceptional quality,
                    strict certifications, and reliable bulk supply.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto group px-9 py-4 bg-gold text-background font-bold text-base rounded-full hover:bg-gold-light transition-all duration-300 shadow-[0_0_30px_rgba(211,167,44,0.25)] hover:shadow-[0_0_50px_rgba(211,167,44,0.5)] hover:scale-105 flex items-center justify-center gap-3 active:scale-95"
                    >
                        Request a Quote
                        <div className="w-6 h-6 rounded-full bg-background/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </button>
                    <button
                        onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-9 py-4 border border-gold/40 text-white font-semibold text-base rounded-full hover:border-gold hover:bg-gold/8 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
                    >
                        Explore Catalog
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-3xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.25 } }}
                            className="glass-card rounded-2xl px-4 py-5 text-center border border-white/10 bg-white/5 backdrop-blur-md hover:border-gold/30 hover:shadow-[0_0_25px_rgba(211,167,44,0.12)] transition-all duration-400 cursor-default"
                        >
                            <div
                                className="text-3xl font-bold text-gold mb-1"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-white/60 text-[11px] font-semibold tracking-wide uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300 group z-20"
            >
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.div>
            </motion.button>
        </section>
    );
}
