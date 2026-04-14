import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all products to pre-render at build time
export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};
    return {
        title: `${product.name} | GB Agri From Farms`,
        description: product.shortDesc,
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(slug, 3);

    return (
        <main className="min-h-screen bg-background">
            <div className="pt-24 md:pt-32 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 mt-4">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{product.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                        {/* Left: Image Gallery */}
                        <div className="space-y-4">
                            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden glass-card border border-border/30">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Thumbnails (If gallery has more than 1 image) */}
                            {product.gallery.length > 1 && (
                                <div className="grid grid-cols-4 gap-4">
                                    {product.gallery.map((img, idx) => (
                                        <div key={idx} className="relative aspect-square rounded-xl overflow-hidden glass-premium border border-transparent hover:border-gold cursor-pointer transition-all">
                                            <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right: Product Info */}
                        <div className="flex flex-col">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {product.name}
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {product.fullDesc}
                            </p>

                            {/* Key Benefits */}
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <div className="w-8 h-px bg-gold" />
                                    Key Benefits
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {product.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-gold" />
                                            </div>
                                            <span className="text-gray-400 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specifications Table */}
                            <div className="mb-10 flex-grow">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <div className="w-8 h-px bg-gold" />
                                    Specifications
                                </h3>
                                <div className="glass-card rounded-2xl overflow-hidden border border-border/30">
                                    <div className="divide-y divide-border/20">
                                        {product.specifications.map((spec, idx) => (
                                            <div key={idx} className="flex px-5 py-4 transition-colors hover:bg-white/[0.02]">
                                                <div className="w-1/3 text-gray-400 text-sm font-medium">{spec.label}</div>
                                                <div className="w-2/3 text-white text-sm">{spec.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border/30 mt-auto">
                                <Link
                                    href="/contact"
                                    className="btn-primary w-full sm:w-auto text-center"
                                >
                                    Get a Quote
                                </Link>
                                <a
                                    href="tel:+919825018910"
                                    className="btn-outline w-full sm:w-auto text-center flex items-center justify-center gap-2"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="pt-20 border-t border-border/20">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Related Products
                                </h2>
                                <p className="text-gray-400">Discover other premium exports from our catalog.</p>
                            </div>
                            <Link href="/products" className="hidden sm:flex text-gold hover:text-gold-light items-center gap-1 font-semibold text-sm transition-colors group">
                                View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map(rp => (
                                <Link key={rp.slug} href={`/products/${rp.slug}`} className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card border border-border/30 hover:border-gold/50 transition-all duration-500 block">
                                    <Image src={rp.image} alt={rp.name} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C17] via-[#1A1C17]/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>{rp.name}</h3>
                                        <p className="text-sm text-gray-400 mt-2 line-clamp-2">{rp.shortDesc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
