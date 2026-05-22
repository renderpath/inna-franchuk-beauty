import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { BeforeAfterSection } from '@/components/sections/before-after-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { BlogSection } from '@/components/sections/blog-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
            <Header />
            <HeroSection />
            <ServicesSection />
            <BeforeAfterSection />
            <TestimonialsSection />
            <BlogSection />
            <FaqSection />
            <CtaSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}