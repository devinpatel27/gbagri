'use client';

import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { products } from '@/data/products';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 md:py-32 relative overflow-hidden">
            {/* Section alt background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#21231F] via-[#1E2019] to-[#21231F]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/4 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-10 bg-gradient-to-r from-gold to-transparent" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Export Quality</span>
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Our Premium{' '}
                            <span className="text-gold-gradient">Products</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2}>
                        <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                            A diverse range of top-tier agricultural commodities, processed naturally
                            and packed securely to retain freshness and flavor.
                        </p>
                    </FadeIn>
                </div>

                {/* Product Grid */}
                <StaggerContainer
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    staggerDelay={0.1}
                >
                    {products.map((product) => (
                        <Link key={product.slug} href={`/products/${product.slug}`} className="block h-full cursor-pointer focus:outline-none">
                            <motion.div
                                variants={staggerItem}
                                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                                className="group relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden glass-card border border-border/40 hover:border-gold/30 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover opacity-25 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Gradient overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C17] via-[#1A1C17]/60 to-transparent" />
                                    {/* Hover gold tint */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        {product.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase font-bold tracking-widest rounded-full backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3
                                        className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300"
                                        style={{ fontFamily: 'Playfair Display, serif' }}
                                    >
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                                        {product.shortDesc}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest cursor-pointer group/btn">
                                        View Details
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Top right corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                            </motion.div>
                        </Link>
                    ))}
                </StaggerContainer>

                <FadeIn direction="up" delay={0.4} className="mt-14 text-center">
                    <Link href="/products" className="inline-block px-8 py-3.5 border border-gold/40 text-white font-semibold text-sm rounded-full hover:border-gold hover:bg-gold/10 hover:scale-105 transition-all duration-300">
                        View Complete Catalog
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
