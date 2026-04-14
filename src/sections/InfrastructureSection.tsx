'use client';

import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import { Boxes, Microscope, Warehouse, Zap } from 'lucide-react';
import Image from 'next/image';

const facilities = [
    {
        title: 'Modern Sorting Units',
        description: 'Buhler Sortex technology ensuring 99.9% purity in every grain.',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Advanced Lab',
        description: 'In-house facility for moisture, size, and aflatoxin analysis.',
        icon: Microscope,
        image: '/prodcuts/lab.webp',
    },
    {
        title: 'Large-scale Storage',
        description: 'Climate-controlled warehouses maintaining freshness year-round.',
        icon: Warehouse,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Automated Packing',
        description: 'Hygienic, touch-free packaging for export-grade safety.',
        icon: Boxes,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    },
];

export default function InfrastructureSection() {
    return (
        <section className="py-24 md:py-32 relative bg-background overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-10 items-end justify-between mb-16">
                    <FadeIn direction="right" className="md:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-gold to-transparent" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Our Assets</span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-white leading-tight"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            World-Class{' '}
                            <span className="text-gold-gradient">Infrastructure</span>
                        </h2>
                    </FadeIn>
                    <FadeIn direction="left" className="md:w-5/12">
                        <p className="text-gray-400 text-base leading-relaxed border-l-2 border-gold/30 pl-5 py-1">
                            Investing in the latest agricultural technology to ensure Indian products meet global food safety standards.
                        </p>
                    </FadeIn>
                </div>

                {/* Facility Cards */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.12}>
                    {facilities.map((fac) => (
                        <motion.div
                            key={fac.title}
                            variants={staggerItem}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden glass-premium border border-border/30 hover:border-gold/30 transition-all duration-400"
                        >
                            {/* Image */}
                            <div className="absolute inset-0  group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100">
                                <Image
                                    src={fac.image}
                                    alt={fac.title}
                                    fill
                                    className="object-cover opacity-25 group-hover:opacity-50 transition-all duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C17] via-[#1A1C17]/70 to-transparent" />
                            </div>

                            {/* Hover gold top corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-bl-full" />

                            {/* Content */}
                            <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(211,167,44,0.4)] transition-all duration-400">
                                    <fac.icon className="w-5 h-5 text-gold group-hover:text-background transition-colors duration-400" />
                                </div>
                                <h3
                                    className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    {fac.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                    {fac.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
