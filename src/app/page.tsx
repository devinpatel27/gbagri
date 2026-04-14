'use client';

import AboutSection from '@/sections/AboutSection';
import CertificationsSection from '@/sections/CertificationsSection';
import CTASection from '@/sections/CTASection';
import FAQSection from '@/sections/FAQSection';
import GlobalMapSection from '@/sections/GlobalMapSection';
import HeroSection from '@/sections/HeroSection';
import InfrastructureSection from '@/sections/InfrastructureSection';
import ProcessSection from '@/sections/ProcessSection';
import ProductsSection from '@/sections/ProductsSection';
import TeamSection from '@/sections/TeamSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import WhyChooseUsSection from '@/sections/WhyChooseUsSection';

export default function Home() {
    return (
        <main className="w-full">
            {/* Cinematic Hero */}
            <HeroSection />

            {/* Narrative Section */}
            <AboutSection />

            {/* The Journey Section - NEW */}
            <ProcessSection />

            {/* Flagship Products */}
            <ProductsSection />

            {/* Global Footprint - NEW */}
            <GlobalMapSection />

            {/* Technical Strength - NEW */}
            <InfrastructureSection />

            {/* Trust & Network */}
            <WhyChooseUsSection />

            {/* Official Credentials */}
            <CertificationsSection />

            {/* Social Proof */}
            <TestimonialsSection />

            {/* Leadership */}
            <TeamSection />

            {/* Buyer Support - NEW */}
            <FAQSection />

            {/* Final Call to Action */}
            <CTASection />
        </main>
    );
}
