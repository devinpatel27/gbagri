import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-border/40 relative overflow-hidden">
            {/* Decorative grain text */}
            <div
                className="absolute -top-10 right-[-5%] text-[180px] font-black text-white/[0.01] pointer-events-none select-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
            >
                AGRI
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="lg:pr-6 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <Image
                                    src="/LOGO.svg"
                                    alt="GBAgri Logo"
                                    width={120}
                                    height={120}
                                    className=""
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Premium agricultural exporters bridging the gap between Indian farms and global markets with uncompromising quality and reliability.
                        </p>
                        <div className="text-[10px] text-muted/50 font-mono mb-6 space-y-1">
                            <div>CIN: U01116GJ2025PLC169445</div>
                            <div>GST: 24AAMCG5061G1ZN</div>
                        </div>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/50 transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Our Products', 'Process', 'Certifications', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-400 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Top Exports</h4>
                        <ul className="space-y-3">
                            {['Bold Peanuts', 'Cumin Seeds', 'Sesame Seeds', 'Fennel Seeds', 'Black Gram'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href="#products"
                                        className="text-gray-400 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <Mail className="w-4 h-4 text-gold/60 mt-0.5 shrink-0 group-hover:text-gold transition-colors" />
                                <a href="mailto:gbagriimpex@gmail.com" className="text-gray-400 text-sm hover:text-gold transition-colors">
                                    gbagriimpex@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
                                <div className="text-sm">
                                    <a href="tel:+918530223280" className="text-gray-400 hover:text-gold transition-colors block">
                                        Nirav: +91 85302 23280
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 shrink-0 group-hover:text-gold transition-colors" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    Survey No 91, P1/p1, Plot No. 2,<br />
                                    Opp. Navi Sankli Gate, Junagadh Road,<br />
                                    Navi Sankli, Jetpur, Rajkot,<br />
                                    Gujarat – 360360
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gold divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted/50 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} GB Agri Impex Limited. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-muted/50">
                        <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
