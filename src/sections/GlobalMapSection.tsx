'use client';

import { FadeIn } from '@/components/animations';
import { motion } from 'framer-motion';
import { Globe2, MapPin, Ship } from 'lucide-react';

const regions = [
    {
        name: 'Asia Pacific',
        icon: '🌏',
        markets: ['China', 'Vietnam', 'Indonesia', 'Thailand', 'Japan'],
    },
    {
        name: 'Middle East',
        icon: '🌍',
        markets: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait'],
    },
    {
        name: 'Europe',
        icon: '🌎',
        markets: ['UK', 'Germany', 'Spain', 'Italy', 'Netherlands'],
    },
    {
        name: 'Americas',
        icon: '🌎',
        markets: ['USA', 'Canada', 'Mexico', 'Brazil'],
    },
];

const stats = [
    { value: '50+', label: 'Destinations', icon: MapPin },
    { value: '12+', label: 'Major Ports', icon: Ship },
    { value: '24/7', label: 'Live Tracking', icon: Globe2 },
];

export default function GlobalMapSection() {
    return (
        <section className="py-24 md:py-32 relative bg-[#21231F] overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/4 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
                            <Globe2 className="w-3.5 h-3.5 text-gold" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Global Reach</span>
                        </div>
                        <h2
                            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Supplying to{' '}
                            <span className="text-gold-gradient">50+ Nations</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our robust logistics network ensures that premium Indian agricultural products reach every corner of the world.
                        </p>
                    </FadeIn>
                </div>

                {/* Regions Grid - 2 column layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Left: Overview */}
                    <FadeIn direction="right">
                        <div className="glass-card rounded-2xl p-8 border border-border/40 h-full">
                            <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Our Export Network
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                GBAgri From Farms has established a robust international footprint spanning four major continents. We work closely with importers, distributors, and food manufacturers to deliver quality directly from Indian farms.
                            </p>

                            {/* Key metrics */}
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map(({ value, label, icon: Icon }) => (
                                    <div key={label} className="text-center p-4 rounded-xl bg-surface/50 border border-border/30 hover:border-gold/30 transition-colors duration-300 group">
                                        <Icon className="w-4 h-4 text-gold/60 mx-auto mb-2 group-hover:text-gold transition-colors" />
                                        <div className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{value}</div>
                                        <div className="text-[10px] text-muted font-bold uppercase tracking-wider">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Region cards */}
                    <FadeIn direction="left" delay={0.15}>
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {regions.map((region, i) => (
                                <motion.div
                                    key={region.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -3, transition: { duration: 0.25 } }}
                                    className="glass-card rounded-xl p-5 border border-border/40 hover:border-gold/30 transition-colors duration-300 group"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg">{region.icon}</span>
                                        <h4 className="text-gold font-bold text-sm group-hover:text-gold-light transition-colors">
                                            {region.name}
                                        </h4>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {region.markets.map((market) => (
                                            <li key={market} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                                                <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                                                {market}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Animated Map Visual */}
                <FadeIn direction="up" delay={0.3}>
                    <div className="relative glass-premium rounded-2xl overflow-hidden border border-border/30 p-8 md:p-10">
                        {/* Pulsating map dots as a decorative element */}
                        <div className="relative aspect-[21/5] md:aspect-[21/4] w-full overflow-hidden">
                            {/* SVG grid/map background */}
                            <div
                                className="absolute inset-0 opacity-[0.04]"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(211,167,44,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(211,167,44,0.8) 1px, transparent 1px)`,
                                    backgroundSize: '60px 60px',
                                }}
                            />

                            {/* Pulsating dots */}
                            {[
                                { x: '22%', y: '40%', label: 'Americas' },
                                { x: '50%', y: '28%', label: 'Europe' },
                                { x: '60%', y: '45%', label: 'Middle East' },
                                { x: '52%', y: '22%', label: 'UK' },
                                { x: '78%', y: '38%', label: 'Asia' },
                                { x: '85%', y: '55%', label: 'SE Asia' },
                                { x: '68%', y: '30%', label: 'India' },
                            ].map((dot, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute flex flex-col items-center"
                                    style={{ left: dot.x, top: dot.y, transform: 'translate(-50%, -50%)' }}
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
                                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                                >
                                    <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(211,167,44,0.9)]" />
                                    <span className="text-[8px] text-gold/60 font-bold tracking-wide mt-1 whitespace-nowrap hidden sm:block">{dot.label}</span>
                                </motion.div>
                            ))}

                            {/* Connecting lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 25">
                                <line x1="68" y1="9.5" x2="22" y2="10" stroke="#D3A72C" strokeWidth="0.3" strokeDasharray="1,2" />
                                <line x1="68" y1="9.5" x2="50" y2="7" stroke="#D3A72C" strokeWidth="0.3" strokeDasharray="1,2" />
                                <line x1="68" y1="9.5" x2="60" y2="11.25" stroke="#D3A72C" strokeWidth="0.3" strokeDasharray="1,2" />
                                <line x1="68" y1="9.5" x2="78" y2="9.5" stroke="#D3A72C" strokeWidth="0.3" strokeDasharray="1,2" />
                                <line x1="68" y1="9.5" x2="85" y2="13.75" stroke="#D3A72C" strokeWidth="0.3" strokeDasharray="1,2" />
                            </svg>

                            {/* Center label */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white/10" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        GLOBAL REACH
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
