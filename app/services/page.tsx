import type { Metadata } from 'next';

import { SiteHeader } from '@/components/layout/site-header';
import { PriceListSection } from '@/components/sections/price-list-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export const metadata: Metadata = {
    title: 'Все услуги и прайс — ресницы и брови',
    description:
        'Полный прайс-лист услуг мастера Инны Франчук: наращивание ресниц, мокрый эффект, 2D/3D объём, ламинирование ресниц, оформление и ламинирование бровей.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />
            <PriceListSection />
            <FaqSection />
            <CtaSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}