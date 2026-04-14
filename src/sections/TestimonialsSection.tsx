'use client';

import { FadeIn } from '@/components/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
    {
        text: "GBAgri has been our most reliable supplier for peanuts. The grading is always perfect and shipments always arrive on schedule. Their dedication to quality is unmatched.",
        author: "Mohammed Al-Fayed",
        company: "Gulf Foods Trading Co.",
        country: "UAE",
        initials: "MA",
    },
    {
        text: "We import tons of cumin and sesame seeds every quarter. The purity percentage claimed is exactly what we receive. Highly professional team with excellent documentation.",
        author: "Sarah Jenkins",
        company: "Global Organics Imports",
        country: "United Kingdom",
        initials: "SJ",
    },
    {
        text: "The packaging quality ensures there is zero transit damage. Their communication and documentation process makes customs clearance extremely smooth.",
        author: "Carlos Rodriguez",
        company: "Iberia Spice Group",
        country: "Spain",
        initials: "CR",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #21231F 0%, #1E2019 50%, #21231F 100%)' }}>
            {/* Decorative large quote mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] text-white/[0.018] font-serif pointer-events-none select-none leading-none">
                &ldquo;
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start lg:items-center">

                    {/* Left Column: Heading + Controls */}
                    <FadeIn direction="right" className="lg:w-5/12">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-gold to-transparent" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Trusted by{' '}
                            <span className="text-gold-gradient">Global Clients</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs">
                            Hear what our international partners have to say about our quality, delivery, and professional export services.
                        </p>

                        {/* Controls */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full border border-border hover:border-gold hover:text-gold hover:bg-gold/5 flex items-center justify-center transition-all duration-300 group"
                            >
                                <ChevronLeft className="w-5 h-5 text-muted group-hover:text-gold transition-colors" />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-6 bg-gold' : 'w-2 bg-border hover:bg-muted'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full border border-border hover:border-gold hover:text-gold hover:bg-gold/5 flex items-center justify-center transition-all duration-300 group"
                            >
                                <ChevronRight className="w-5 h-5 text-muted group-hover:text-gold transition-colors" />
                            </button>
                        </div>
                    </FadeIn>

                    {/* Right Column: Testimonial Card */}
                    <FadeIn direction="left" delay={0.2} className="lg:w-7/12 w-full">
                        <div className="relative">
                            {/* Background glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold/10 via-transparent to-gold/5 rounded-3xl blur opacity-60" />

                            <div className="relative glass-card border border-gold/20 rounded-2xl p-8 sm:p-10 min-h-[280px] overflow-hidden">
                                {/* Quote icon */}
                                <div className="absolute top-7 right-8 w-12 h-12 rounded-xl bg-gold/5 border border-gold/20 flex items-center justify-center">
                                    <Quote className="w-5 h-5 text-gold/40" />
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        className="relative z-10"
                                    >
                                        <p
                                            className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-8 pr-12"
                                            style={{ fontFamily: 'Playfair Display, serif' }}
                                        >
                                            &ldquo;{testimonials[current].text}&rdquo;
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                                                {testimonials[current].initials}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold tracking-wide text-sm">
                                                    {testimonials[current].author}
                                                </h4>
                                                <p className="text-gold text-xs mt-0.5">
                                                    {testimonials[current].company} &nbsp;&bull;&nbsp; {testimonials[current].country}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Decorative corner */}
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold/8 to-transparent rounded-full -translate-x-8 translate-y-8" />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
