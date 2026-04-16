'use client';

import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function ProductDetailPage() {
    const params = useParams();
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    const product = getProductBySlug(slug);

    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, [product]);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(slug, 3);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % product.gallery.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
    };

    const handleDragEnd = (event: any, info: any) => {
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold) {
            handleNext();
        } else if (info.offset.x > swipeThreshold) {
            handlePrev();
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <div className="pt-24 md:pt-32 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 mt-4">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{product.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                        {/* Left: Image Gallery with Draggable Main Image */}
                        <div className="space-y-6">
                            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-border/30 group cursor-grab active:cursor-grabbing">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragEnd={handleDragEnd}
                                        className="absolute inset-0 z-0"
                                    >
                                        <Image
                                            src={product.gallery[activeIndex]}
                                            alt={product.name}
                                            fill
                                            className="object-cover pointer-events-none"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Arrow controls - Desktop only */}
                                {product.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-black z-20"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-black z-20"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Thumbnails */}
                            {product.gallery.length > 1 && (
                                <div className="relative overflow-hidden">
                                    <div
                                        ref={sliderRef}
                                        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
                                    >
                                        {product.gallery.map((img, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setActiveIndex(idx)}
                                                className={`relative flex-shrink-0 w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${idx === activeIndex ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
                                                    }`}
                                            >
                                                <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Product Info */}
                        <div className="flex flex-col">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {product.name}
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {product.fullDesc}
                            </p>

                            {/* Key Benefits */}
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <div className="w-8 h-px bg-gold" />
                                    Key Benefits
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {product.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-gold" />
                                            </div>
                                            <span className="text-gray-400 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specifications Table */}
                            <div className="mb-10 flex-grow">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <div className="w-8 h-px bg-gold" />
                                    Specifications
                                </h3>
                                <div className="glass-card rounded-2xl overflow-hidden border border-border/30">
                                    <div className="divide-y divide-border/20">
                                        {product.specifications.map((spec, idx) => (
                                            <div key={idx} className="flex px-5 py-4 transition-colors hover:bg-white/[0.02]">
                                                <div className="w-1/3 text-gray-400 text-sm font-medium">{spec.label}</div>
                                                <div className="w-2/3 text-white text-sm">{spec.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:pt-10 border-t border-border/30 mt-auto">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-gold text-background font-bold rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300 text-center flex-1"
                                >
                                    Get a Quote
                                </Link>
                                <a
                                    href="tel:+918530223280"
                                    className="px-8 py-4 border border-gold/40 text-white font-semibold rounded-full hover:border-gold hover:bg-gold/10 transition-all duration-300 text-center flex-1"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="pt-20 border-t border-border/20">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Related Products
                                </h2>
                                <p className="text-gray-400">Discover other premium exports from our catalog.</p>
                            </div>
                            <Link href="/products" className="hidden sm:flex text-gold hover:text-gold-light items-center gap-1 font-semibold text-sm transition-colors group">
                                View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map(rp => (
                                <Link key={rp.slug} href={`/products/${rp.slug}`} className="group block">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-border/30 hover:border-gold/50 transition-all duration-500">
                                        <Image src={rp.image} alt={rp.name} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C17] via-transparent to-transparent opacity-60" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>{rp.name}</h3>
                                            <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                Learn More <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
