'use client';

import { FadeIn } from '@/components/animations';

interface PageHeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage = 'https://images.unsplash.com/photo-1595859702830-4e00780277bd?auto=format&fit=crop&q=80&w=2000'
}: PageHeroProps) {
    return (
        <section className="relative pt-32   md:pt-40  overflow-hidden bg-background">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
                <FadeIn direction="up">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-sm font-bold tracking-[0.3em] uppercase">{subtitle}</span>
                        <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-gold" />
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.15}>
                    <h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                        {title.split(' ').map((word, i, arr) => (
                            i === arr.length - 1 ? <span key={word} className="text-gold-gradient">{word}</span> : `${word} `
                        ))}
                    </h1>
                </FadeIn>
            </div>
        </section>
    );
}
