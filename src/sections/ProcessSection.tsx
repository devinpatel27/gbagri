'use client';

import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, PackageCheck, Search, ShieldCheck, Truck } from 'lucide-react';

const steps = [
    {
        title: 'Seed Procurement',
        description: 'Direct sourcing from trusted farms across Gujarat and neighboring regions.',
        icon: Leaf,
        details: ['Organic cultivation', 'Non-GMO seeds', 'Farm inspections'],
        color: 'from-emerald-500/10 to-transparent',
    },
    {
        title: 'Precision Sorting',
        description: 'Advanced machine sorting to ensure uniform size, color, and texture.',
        icon: Search,
        details: ['Size grading', 'Moisture control', 'Impurity removal'],
        color: 'from-blue-500/10 to-transparent',
    },
    {
        title: 'Lab Testing',
        description: 'Rigorous analysis for aflatoxin, pesticides, and nutritional value.',
        icon: ShieldCheck,
        details: ['Third-party certification', 'Batch tracking', 'Phytosanitary check'],
        color: 'from-purple-500/10 to-transparent',
    },
    {
        title: 'Premium Packing',
        description: 'Secure, food-grade packaging designed for long-distance sea freight.',
        icon: PackageCheck,
        details: ['Vacuum sealing', 'Bulk jute bags', 'HDPE branding'],
        color: 'from-orange-500/10 to-transparent',
    },
    {
        title: 'Global Delivery',
        description: 'Efficient logistics network reaching ports in Asia, Europe, and Americas.',
        icon: Truck,
        details: ['FOB/CIF options', 'Real-time tracking', 'Customs expertise'],
        color: 'from-gold/10 to-transparent',
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-[#1C1E19]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/4 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Our Journey</span>
                        </div>
                        <h2
                            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Farm to{' '}
                            <span className="text-gold-gradient">Global Market</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                            Trace the uncompromising standards we maintain at every step of the export operation.
                        </p>
                    </FadeIn>
                </div>

                {/* Step Cards Grid */}
                <StaggerContainer
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative"
                    staggerDelay={0.12}
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            variants={staggerItem}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="group relative glass-card rounded-2xl p-6 border border-border/50 hover:border-gold/40 transition-all duration-400 overflow-hidden cursor-default"
                        >
                            {/* Step number background */}
                            <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] pointer-events-none font-display select-none">
                                {i + 1}
                            </div>

                            {/* BG gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Step badge */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-400">
                                        <step.icon className="w-5 h-5 text-gold group-hover:text-background transition-colors duration-400" />
                                    </div>
                                    <span className="text-xs font-bold text-gold/50 tracking-widest">0{i + 1}</span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300 leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                    {step.description}
                                </p>

                                {/* Detail list */}
                                <ul className="flex flex-col gap-2">
                                    {step.details.map((detail) => (
                                        <li key={detail} className="flex items-center gap-2 text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                            <CheckCircle2 className="w-3 h-3 text-gold/60 shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* Connector line for desktop */}
                <div className="hidden lg:flex items-center justify-between mt-6 px-8">
                    {steps.map((_, i) => (
                        <div key={i} className="flex items-center gap-0 flex-1 last:flex-none">
                            <div className="w-4 h-4 rounded-full bg-gold/30 border border-gold/50 shrink-0" />
                            {i < steps.length - 1 && (
                                <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-gold/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
