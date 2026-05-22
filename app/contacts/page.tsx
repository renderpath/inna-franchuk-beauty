import { SiteHeader } from '@/components/layout/site-header';
import { ContactsSection } from '@/components/sections/contacts-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты',
    description:
        'Контакты мастера Инны Франчук: ресницы и брови в пгт Первомайское, Республика Крым. Запись через Telegram, WhatsApp или форму на сайте.',
};

export default function ContactsPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />
            <ContactsSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}