'use client';

import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import { Award, Cog, Globe, ShieldCheck } from 'lucide-react';

const highlights = [
    {
        icon: ShieldCheck,
        title: 'Strict Quality Control',
        desc: 'Every shipment undergoes rigorous lab testing and quality checks before dispatch.',
    },
    {
        icon: Globe,
        title: 'Global Export Network',
        desc: 'Delivering to 50+ countries across Asia, Europe, Middle East, and the Americas.',
    },
    {
        icon: Cog,
        title: 'Advanced Processing',
        desc: 'State-of-the-art sorting, cleaning, and packaging facilities meeting international standards.',
    },
    {
        icon: Award,
        title: 'Certified Excellence',
        desc: 'ISO 22000, APEDA, FSSAI certified — trusted by global importers and food brands.',
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
            {/* Subtle bg element */}
            <div
                className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 80% 50%, #D3A72C 0%, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image / Visual Column */}
                    <FadeIn direction="left" delay={0.1}>
                        <div className="relative">
                            {/* Main visual box */}
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[460px] mx-auto lg:mx-0">
                                <div
                                    className="w-full h-full"
                                    style={{ background: 'linear-gradient(135deg, #2A2C27 0%, #32352E 40%, #1E2019 100%)' }}
                                >
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        {/* Central visual */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-52 h-52 rounded-full border-2 border-gold/15 flex items-center justify-center">
                                                <div className="w-40 h-40 rounded-full border border-gold/25 flex items-center justify-center">
                                                    <div className="w-28 h-28 rounded-full bg-gold/8 border border-gold/35 flex items-center justify-center">
                                                        <span className="text-5xl select-none">🌾</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Orbiting items */}
                                        {['🥜', '🌿', '⭐', '🌱'].map((emoji, i) => {
                                            const angle = (i * 90 * Math.PI) / 180;
                                            const x = Math.cos(angle) * 125;
                                            const y = Math.sin(angle) * 125;
                                            return (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-12 h-12 rounded-full bg-surface border border-border/60 flex items-center justify-center text-2xl shadow-lg"
                                                    style={{
                                                        left: `calc(50% + ${x}px - 24px)`,
                                                        top: `calc(50% + ${y}px - 24px)`,
                                                    }}
                                                    animate={{ rotate: [0, 360] }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: i * 2 }}
                                                >
                                                    {emoji}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* Gradient fade bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge — bottom right */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-4 lg:-right-10 glass-card rounded-2xl px-5 py-4 shadow-2xl z-20 border border-gold/20"
                            >
                                <div className="text-3xl font-bold text-gold" style={{ fontFamily: 'Playfair Display, serif' }}>9+</div>
                                <div className="text-muted text-[10px] font-bold uppercase tracking-widest">Years Exp</div>
                            </motion.div>

                            {/* Floating badge — top left */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                                className="absolute top-1/4 -left-6 glass-card rounded-2xl px-5 py-4 shadow-2xl z-20 border border-gold/20 hidden sm:block"
                            >
                                <div className="text-3xl font-bold text-gold" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                                <div className="text-muted text-[10px] font-bold uppercase tracking-widest">Quality</div>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Text Column */}
                    <div>
                        <FadeIn direction="right" delay={0.2}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-0.5 w-10 bg-gradient-to-r from-gold to-transparent" />
                                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Our Story</span>
                            </div>
                            <h2
                                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
                                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                            >
                                Bridging Indian <br />
                                <span className="text-gold-gradient">Farms to the World</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                GBAgri From Farms is a premium agricultural export company based in Gujarat, India.
                                We specialize in sourcing, processing, and exporting high-quality agri-commodities
                                to global markets with uncompromising standards.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-10">
                                Our vertically integrated supply chain — from direct farm procurement to advanced
                                processing facilities — ensures every product meets the strictest international
                                quality benchmarks.
                            </p>
                        </FadeIn>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                            {highlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={staggerItem}
                                    whileHover={{ y: -3, transition: { duration: 0.25 } }}
                                    className="glass-card rounded-2xl p-5 border border-border/40 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(211,167,44,0.08)] transition-all duration-400 group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-gold" />
                                    </div>
                                    <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
