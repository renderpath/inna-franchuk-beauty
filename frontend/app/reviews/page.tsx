import type { Metadata } from 'next';

import { SiteHeader } from '@/components/layout/site-header';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { ReviewsPageSection } from "@/components/sections/reviews-page-section";

export const metadata: Metadata = {
    title: 'Все услуги и прайс — ресницы и брови',
    description:
        'Полный прайс-лист услуг мастера Инны Франчук: наращивание ресниц, мокрый эффект, 2D/3D объём, ламинирование ресниц, оформление и ламинирование бровей.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />
            <ReviewsPageSection />
            <FaqSection />
            <CtaSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}