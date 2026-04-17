import PageHero from '@/components/PageHero';
import AboutSection from '@/sections/AboutSection';
import InfrastructureSection from '@/sections/InfrastructureSection';
import ProcessSection from '@/sections/ProcessSection';
import TeamSection from '@/sections/TeamSection';

export const metadata = {
    title: 'About Us | GB Agri From Farms',
    description: 'Learn about GB Agri From Farms, our mission, vision, state-of-the-art infrastructure, and our dedicated team behind premium Indian agricultural exports.',
};

export default function AboutPage() {
    return (
        <main className="w-full">
            <PageHero
                title="About Our Company"
                subtitle="The GB Agri Story"
                backgroundImage="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />
            <AboutSection />
            <InfrastructureSection />
            <ProcessSection />
            <TeamSection />
        </main>
    );
}
