import PageHero from '@/components/PageHero';
import CertificationsSection from '@/sections/CertificationsSection';

export const metadata = {
    title: 'Quality & Certifications | GB Agri Impex Limited',
    description: 'View our ISO, APEDA, and strict food safety certifications ensuring our agricultural exports meet the highest global standards.',
};

export default function CertificationsPage() {
    return (
        <main className="w-full">
            <PageHero
                title="Global Standards"
                subtitle="Certified Excellence"
            />
            <div className="py-20">
                <CertificationsSection />
            </div>
        </main>
    );
}
