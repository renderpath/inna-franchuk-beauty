import { LocalBusinessSchema } from '@/components/seo/local-business-schema';

import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactsSection } from '@/components/sections/contacts-section';

import { Footer } from '@/components/layout/footer';
import { FloatingActions } from '@/components/layout/floating-actions';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';

export default function HomePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#fff8f4]">
            <LocalBusinessSchema />

            <HeroSection />

            <ServicesSection />

            <PortfolioSection />

            <TestimonialsSection />

            <ContactsSection />

            <Footer />

            <FloatingActions />

            <ScrollToTop />

            <MobileBottomNav />
        </main>
    );
}