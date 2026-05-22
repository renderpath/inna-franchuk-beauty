import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';

export default function HomePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f8f5f2]">
            <Header />
            <HeroSection />
        </main>
    );
}