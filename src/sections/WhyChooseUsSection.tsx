'use client';

import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import { Handshake, Network, ShieldCheck, Truck } from 'lucide-react';

const features = [
    {
        icon: Network,
        title: 'Extensive Supply Network',
        desc: 'Direct connections with farmers and processors across India, ensuring consistent bulk supply year-round.',
    },
    {
        icon: ShieldCheck,
        title: 'Certified Premium Quality',
        desc: 'Stringent quality assurance backed by ISO 22000, APEDA, FSSAI, and Spices Board of India certifications.',
    },
    {
        icon: Truck,
        title: 'Fast & Secure Delivery',
        desc: 'Optimized logistics and secure packaging to ensure commodities reach you safely and on schedule, globally.',
    },
    {
        icon: Handshake,
        title: 'Long-term Partnerships',
        desc: 'We prioritize transparency, competitive pricing, and reliable service to build lasting global relationships.',
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#262823] to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/4 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center justify-center gap-3 mb-5">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-gold" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Why Choose Us</span>
                            <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-gold" />
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            The Reliable Partner for{' '}
                            <span className="text-gold-gradient">Global Importers</span>
                        </h2>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto" staggerDelay={0.12}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={staggerItem}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="glass-card p-7 rounded-2xl relative group border border-border/40 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(211,167,44,0.08)] transition-all duration-400 overflow-hidden cursor-default h-full flex flex-col"
                        >
                            {/* Gold accent line top on hover */}
                            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-600 ease-in-out rounded-full" />

                            <div className="w-12 h-12 rounded-xl bg-surface border border-gold/20 flex items-center justify-center mb-5 text-gold group-hover:scale-110 group-hover:bg-gold/15 group-hover:shadow-[0_0_20px_rgba(211,167,44,0.25)] transition-all duration-400">
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2.5 tracking-wide leading-snug group-hover:text-gold transition-colors duration-300">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>

                            {/* Decorative background number */}
                            <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.02] pointer-events-none font-display select-none">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
