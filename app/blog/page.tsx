import type { Metadata } from 'next';

import { SiteHeader } from '@/components/layout/site-header';
import { BlogPageSection } from '@/components/sections/blog-page-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';

export const metadata: Metadata = {
    title: 'Блог — уход за ресницами и бровями',
    description:
        'Полезные статьи об уходе за ресницами и бровями, выборе эффекта и подготовке к процедурам.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />
            <BlogPageSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}