import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/sections/Footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'GB Agri Impex Limited | Premium Agricultural Exports',
    description:
        'GB Agri Impex Limited — A trusted global agricultural exporter specializing in premium peanuts, seeds, spices, and grains. ISO certified. From India to the world.',
    keywords:
        'agricultural export, peanuts, sesame seeds, cumin seeds, fennel seeds, black gram, blanched peanuts, India export, APEDA certified',
    openGraph: {
        title: 'GB Agri Impex Limited | Premium Agricultural Exports',
        description:
            'Premium quality agricultural exports from India to global markets. Peanuts, seeds, spices and more.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="bg-background text-white antialiased selection:bg-gold/30 selection:text-white flex flex-col min-h-screen">
                <SmoothScroll>
                    <Navbar />
                    <main className="flex-grow relative overflow-x-hidden">
                        {children}
                    </main>
                    <Footer />
                    <WhatsAppButton />
                </SmoothScroll>
            </body>
        </html>
    );
}
