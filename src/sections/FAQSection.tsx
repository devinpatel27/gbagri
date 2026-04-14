'use client';

import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Inbox } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'What types of peanuts do you export?',
        answer: 'We specialize in Indian Bold Peanuts, Java Peanuts, and Blanched Peanuts (Whole & Split). Our peanuts are graded meticulously by size (count per ounce) and undergo strict aflatoxin testing to meet EU and US standards.',
    },
    {
        question: 'What is your minimum order quantity (MOQ)?',
        answer: 'Our typical MOQ for bulk international exports is one 20-foot full container load (FCL), which is approximately 19–20 metric tons depending on the product and packaging.',
    },
    {
        question: 'Can you provide third-party lab reports?',
        answer: 'Absolutely. Every shipment is accompanied by laboratory analysis reports from recognized agencies like SGS, Geo-Chem, or QSS. We test for purity, moisture content, pesticide residues, and aflatoxin.',
    },
    {
        question: 'What are your standard payment and shipping terms?',
        answer: 'We primarily work with L/C (Letter of Credit) at sight or T/T (Telegraphic Transfer). Shipping terms include FOB (Free on Board), CIF (Cost, Insurance, and Freight), and CNF (Cost and Freight).',
    },
    {
        question: 'Which countries do you currently export to?',
        answer: 'We have an active export network in South East Asia (Vietnam, Indonesia, Thailand), Middle East (UAE, Saudi Arabia), Europe (UK, Spain, Germany), and North America.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 relative bg-[#1C1E19] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {/* Background radial */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/4 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
                            <Inbox className="w-3.5 h-3.5 text-gold" />
                            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Support</span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                        >
                            Frequently Asked{' '}
                            <span className="text-gold-gradient">Questions</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Everything you need to know about our sourcing, quality, and global logistics.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={staggerItem}
                            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openIndex === i
                                    ? 'border-gold/50 bg-gold/5 shadow-[0_0_30px_rgba(211,167,44,0.08)]'
                                    : 'border-border/40 bg-surface/20 hover:border-border'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                            >
                                <span
                                    className={`text-base md:text-lg font-semibold transition-colors duration-300 leading-snug ${openIndex === i ? 'text-gold' : 'text-white'
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === i
                                            ? 'border-gold bg-gold/10 text-gold'
                                            : 'border-border text-muted'
                                        }`}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-6 pb-6 text-gray-300 leading-relaxed text-sm md:text-base border-t border-gold/10 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </StaggerContainer>

                <FadeIn direction="up" delay={0.4} className="mt-14 text-center">
                    <p className="text-gray-400 mb-6 text-sm">Still have questions? Our export team is ready to help.</p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-gold text-background font-bold rounded-full hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(211,167,44,0.4)] transition-all duration-300 active:scale-95"
                    >
                        Contact Support
                    </button>
                </FadeIn>
            </div>
        </section>
    );
}
