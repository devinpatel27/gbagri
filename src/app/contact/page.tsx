import PageHero from '@/components/PageHero';
import CTASection from '@/sections/CTASection';

export const metadata = {
    title: 'Contact Us | GB Agri From Farms',
    description: 'Get in touch with GB Agri From Farms for trade inquiries, bulk orders, and premium agricultural export partnerships.',
};

export default function ContactPage() {
    return (
        <main className="w-full">
            <PageHero
                title="Get in Touch"
                subtitle="Trade Inquiries & Partnerships"
                backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />
            <div className="py-10">
                <CTASection />
            </div>
        </main>
    );
}
