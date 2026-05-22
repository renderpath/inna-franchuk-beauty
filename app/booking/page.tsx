import type { Metadata } from 'next';

import { SiteHeader } from '@/components/layout/site-header';
import { CtaSection } from '@/components/sections/cta-section';
import { FaqSection } from '@/components/sections/faq-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';

export const metadata: Metadata = {
    title: 'Онлайн-запись',
    description:
        'Онлайн-запись к мастеру Инне Франчук на наращивание ресниц, ламинирование ресниц, оформление и ламинирование бровей.',
};

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />

            <CtaSection />

            <FaqSection />

            <Footer />

            <MobileBottomNav />
        </main>
    );
}