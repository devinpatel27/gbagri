'use client';

import { FadeIn } from '@/components/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { Boxes, ChevronLeft, ChevronRight, Microscope, Warehouse, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const facilities = [
    {
        title: 'Modern Sorting Units',
        description:
            'Equipped with state-of-the-art Buhler Sortex technology, our sorting units ensure 99.9% purity. We use high-resolution cameras and infrared sensors to detect and remove even the smallest impurities and discolored grains, ensuring only the finest quality reaches our global clients.',
        icon: Zap,
        image: '/Infrastructure/Slide1.jpg',
        tag: 'Purity & Precision',
    },
    {
        title: 'Advanced Quality Lab',
        description:
            'Our in-house quality control laboratory is the heart of our operations. We conduct rigorous testing for moisture content, size uniformity, and aflatoxin levels. Every batch is certified to meet international food safety standards (ISO, FSSAI, APEDA) before it leaves our facility.',
        icon: Microscope,
        image: '/Infrastructure/Slide2.jpg',
        tag: 'Safety First',
    },
    {
        title: 'Large-scale Storage',
        description:
            'We maintain massive, climate-controlled warehousing facilities designed to preserve the natural freshness and nutritional value of our commodities. Our storage systems are pest-controlled and monitored 24/7 to prevent any degradation during the transition from farm to port.',
        icon: Warehouse,
        image: '/Infrastructure/Slide3.jpg',
        tag: 'Freshness Guaranteed',
    },
    {
        title: 'Automated Packing Line',
        description:
            'Our touch-free, automated packaging systems provide hygienic and durable solutions for international transit. We offer customized packaging options, from small retail pouches to massive 50kg bulk bags, all industrial-sealed for export-grade safety.',
        icon: Boxes,
        image: '/Infrastructure/Slide4.jpg',
        tag: 'Export-Grade Safety',
    },
];

export default function InfrastructureSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % facilities.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
    };

    const activeFac = facilities[activeIndex];

    return (
        <section className="py-24 md:py-36 relative bg-background overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left: Content Side (50%) */}
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="right" key={`content-${activeIndex}`}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-0.5 w-10 bg-gold" />
                                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                                    Our Infrastructure
                                </span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-block px-3 py-1 rounded-md bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20">
                                    {activeFac.tag}
                                </span>
                                <h2
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
                                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                                >
                                    {activeFac.title.split(' ')[0]}{' '}
                                    <span className="text-gold-gradient">
                                        {activeFac.title.split(' ').slice(1).join(' ')}
                                    </span>
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                    {activeFac.description}
                                </p>

                                {/* Features / Progress Indicators */}
                                <div className="flex flex-col gap-4 mb-12">
                                    {facilities.map((fac, idx) => (
                                        <button
                                            key={fac.title}
                                            onClick={() => {
                                                setDirection(idx > activeIndex ? 1 : -1);
                                                setActiveIndex(idx);
                                            }}
                                            className="group flex items-center gap-5 text-left transition-all duration-300"
                                        >
                                            <div
                                                className={`w-12 h-0.5 rounded-full transition-all duration-500 ${idx === activeIndex
                                                        ? 'w-16 bg-gold shadow-[0_0_10px_rgba(211,167,44,0.5)]'
                                                        : 'bg-white/10 group-hover:bg-white/30'
                                                    }`}
                                            />
                                            <span
                                                className={`text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${idx === activeIndex
                                                        ? 'text-white'
                                                        : 'text-gray-500 group-hover:text-gray-300'
                                                    }`}
                                            >
                                                {fac.title}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group"
                                    >
                                        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group"
                                    >
                                        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </FadeIn>
                    </div>

                    {/* Right: Slider Image Side (50%) */}
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="left">
                            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group">
                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-[2rem] border border-gold/20 z-20 pointer-events-none" />

                                <AnimatePresence initial={false} mode="wait" custom={direction}>
                                    <motion.div
                                        key={activeIndex}
                                        custom={direction}
                                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={activeFac.image}
                                            alt={activeFac.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Icon Overlay */}
                                <motion.div
                                    key={`icon-${activeIndex}`}
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gold/15 backdrop-blur-md border border-gold/30 flex items-center justify-center z-30"
                                >
                                    <activeFac.icon className="w-7 h-7 text-gold" />
                                </motion.div>

                                {/* Floating Tag */}
                                <div className="absolute bottom-8 left-8 z-30">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg"
                                    >
                                        <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Facility 0{activeIndex + 1}</p>
                                    </motion.div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
