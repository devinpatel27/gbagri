'use client';

import { FadeIn } from '@/components/animations';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
    {
        icon: Mail,
        label: 'Email Us',
        value: 'gbagriimpex@gmail.com',
        href: 'mailto:gbagriimpex@gmail.com',
    },
    {
        icon: Phone,
        label: 'Call Us',
        value: '+91 85302 23280',
        href: 'tel:+918530223280',
    },
    {
        icon: MapPin,
        label: 'Our Office',
        value: 'Survey No 91, P1/p1, Plot No. 2,\nOpp. Navi Sankli Gate, Junagadh Road,\nNavi Sankli, Jetpur, Rajkot, Gujarat 360360',
        href: 'https://maps.google.com',
    },
];

export default function CTASection() {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background with texture */}
            <div className="absolute inset-0 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605369680370-5d66627ab7c6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.04] mix-blend-overlay grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                <div className="glass-card border border-gold/25 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto overflow-hidden relative shadow-2xl shadow-gold/5">
                    {/* Top shimmer line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    {/* Glow blob */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/15 blur-[100px] rounded-full pointer-events-none" />

                    <FadeIn direction="up">
                        {/* Company Info Banner */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold/8 border border-gold/25 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">GB Agri Impex Limited</span>
                        </div>

                        <h2
                            className="text-4xl sm:text-5xl font-bold text-white mb-6"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Looking for Reliable <br />
                            <span className="text-gold-gradient">Bulk Supply?</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                            Get in touch with us for the latest FOB/CIF prices, product specifications, and shipping details. We reply within 24 hours.
                        </p>

                        {/* Email form */}
                        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-14" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your corporate email"
                                className="flex-1 bg-surface border border-border rounded-full px-6 py-4 text-white focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted/50 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-gold text-background font-bold px-8 py-4 rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(211,167,44,0.5)] transition-all duration-300 active:scale-95 text-sm"
                            >
                                Get Quote
                            </button>
                        </form>

                        {/* Contact Info Grid */}
                        <div className="grid sm:grid-cols-3 gap-6 border-t border-border/40 pt-10">
                            {contactItems.map(({ icon: Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="flex flex-col items-center gap-3 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-full bg-surface border border-border group-hover:border-gold group-hover:bg-gold/5 group-hover:shadow-[0_0_20px_rgba(211,167,44,0.2)] flex items-center justify-center transition-all duration-300">
                                        <Icon className="w-5 h-5 text-muted group-hover:text-gold transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-muted/60 uppercase tracking-widest mb-1">{label}</div>
                                        <div className="text-sm font-medium text-white text-center whitespace-pre-line group-hover:text-gold transition-colors duration-300 leading-relaxed">
                                            {value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Legal info */}
                        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] text-muted/50 font-mono">
                            <span>CIN: U01116GJ2025PLC169445</span>
                            <span className="hidden sm:inline text-border">|</span>
                            <span>GST: 24AAMCG5061G1ZN</span>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
