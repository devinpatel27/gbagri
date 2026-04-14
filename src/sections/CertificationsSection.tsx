'use client';

import { FadeIn } from '@/components/animations';
import { motion } from 'framer-motion';

const certifications = [
    { name: 'APEDA', desc: 'Agricultural & Processed Food Products Export Development Authority' },
    { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
    { name: 'ISO 22000', desc: 'Food Safety Management System Certified' },
    { name: 'SPICES BOARD', desc: 'Spices Board of India Certification' },
    { name: 'FIEO', desc: 'Federation of Indian Export Organisations' },
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 bg-background border-y border-border/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    <FadeIn direction="right" className="lg:w-5/12 text-center lg:text-left shrink-0">
                        <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-gold to-transparent" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Credentials</span>
                        </div>
                        <h2
                            className="text-3xl sm:text-4xl font-bold text-white mb-4"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Recognized &{' '}
                            <span className="text-gold-gradient">Certified</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                            Our export operations adhere to strict international food safety standards and are recognized by major global regulatory bodies.
                        </p>
                    </FadeIn>

                    <div className="lg:w-7/12 w-full relative">
                        {/* Gradient overlays */}
                        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />

                        <div className="flex overflow-hidden select-none py-2">
                            <div className="flex items-center gap-10 md:gap-14 animate-marquee">
                                {[...certifications, ...certifications, ...certifications].map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                        className="flex flex-col items-center shrink-0 cursor-default group px-3"
                                    >
                                        <div className="glass-card rounded-xl px-5 py-4 border border-border/40 group-hover:border-gold/40 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(211,167,44,0.12)]">
                                            <span className="text-white font-bold text-lg tracking-[0.15em] opacity-50 group-hover:opacity-100 group-hover:text-gold transition-all duration-300 whitespace-nowrap">
                                                {cert.name}
                                            </span>
                                        </div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted/40 group-hover:text-muted/70 transition-colors mt-2 text-center max-w-[100px]">
                                            {cert.desc.split(' ').slice(0, 3).join(' ')}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
