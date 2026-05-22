import type { Metadata } from 'next';

import { SiteHeader } from '@/components/layout/site-header';
import { PortfolioGallerySection } from '@/components/sections/portfolio-gallery-section';
import { BeforeAfterSection } from '@/components/sections/before-after-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';

export const metadata: Metadata = {
    title: 'Галерея работ — ресницы и брови',
    description:
        'Галерея работ Инны Франчук: мокрый эффект, ламинирование ресниц, оформление бровей, 2D объём и before/after.',
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />
            <PortfolioGallerySection />
            <BeforeAfterSection />
            <CtaSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}