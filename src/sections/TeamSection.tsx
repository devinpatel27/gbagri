'use client';

import { FadeIn } from '@/components/animations';
import { motion } from 'framer-motion';
import { Phone, Quote } from 'lucide-react';

const leaders = [
    {
        name: 'Nirav Ghiniya',
        role: 'Director',
        initials: 'NG',
        phone: '+91 85302 23280',
        quote: 'Our mission is to bring the finest of Indian agriculture to global tables — with integrity, precision, and an unwavering commitment to quality.',
    },
];

export default function TeamSection() {
    return (
        <section className="py-24 md:py-28 relative bg-background overflow-hidden">
            {/* Background radial */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-gold/4 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <FadeIn direction="up" className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-3 mb-5">
                        <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Leadership</span>
                        <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-gold" />
                    </div>
                    <h2
                        className="text-4xl sm:text-5xl font-bold text-white"
                        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                        The Vision{' '}
                        <span className="text-gold-gradient">Behind Us</span>
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {leaders.map((leader, i) => (
                        <FadeIn key={leader.name} direction="up" delay={i * 0.15} className="h-full">
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="relative group h-full flex flex-col"
                            >
                                {/* Outer glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/20 via-transparent to-gold/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Card */}
                                <div className="relative glass-card flex flex-col rounded-2xl p-8 border border-white/5 group-hover:border-gold/25 transition-all duration-500 overflow-hidden flex-1 h-full">
                                    {/* BG hover gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        {/* Avatar */}
                                        <div className="relative mb-5">
                                            <div className="absolute inset-0 rounded-full border-2 border-gold/15 scale-110 group-hover:scale-115 transition-transform duration-700" />
                                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-surface to-[#1a1c17] border border-gold/30 flex items-center justify-center">
                                                <span
                                                    className="text-2xl font-bold text-gold/60"
                                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                                >
                                                    {leader.initials}
                                                </span>
                                            </div>
                                        </div>

                                        <h3
                                            className="text-xl font-bold text-white mb-0.5"
                                            style={{ fontFamily: 'Playfair Display, serif' }}
                                        >
                                            {leader.name}
                                        </h3>
                                        <p className="text-gold font-bold uppercase tracking-[0.25em] text-[10px] mb-5">
                                            {leader.role}
                                        </p>

                                        {/* Quote */}
                                        <div className="relative mb-6">
                                            <Quote className="w-6 h-6 text-gold/15 mx-auto mb-2" />
                                            <blockquote className="text-gray-300 text-sm leading-relaxed italic">
                                                &ldquo;{leader.quote}&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <a
                                                href={`tel:${leader.phone.replace(/\s/g, '')}`}
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-border hover:border-gold hover:text-gold transition-all duration-300 text-xs font-semibold text-muted"
                                            >
                                                <Phone className="w-3.5 h-3.5" />
                                                {leader.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
