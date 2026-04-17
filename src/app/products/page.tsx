import PageHero from '@/components/PageHero';
import ProductsSection from '@/sections/ProductsSection';

export const metadata = {
    title: 'Our Products | GB Agri Impex Limited',
    description: 'Explore our wide range of premium agricultural exports including Peanuts, Cumin Seeds, Sesame Seeds, and Pulses, all processed to global standards.',
};

export default function ProductsPage() {
    return (
        <main className="w-full">
            <PageHero
                title="Our Premium Catalog"
                subtitle="Export Quality Commodities"
                backgroundImage="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />
            {/* The ProductsSection already renders the full grid beautifully */}
            <div className="pt-10">
                <ProductsSection />
            </div>
        </main>
    );
}
