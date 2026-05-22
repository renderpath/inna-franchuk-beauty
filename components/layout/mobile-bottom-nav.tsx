'use client';

import Link from 'next/link';
import { BriefcaseBusiness, CalendarDays, Home, Image, Phone } from 'lucide-react';

const mobileNav = [
    {
        label: 'Главная',
        href: '#',
        icon: Home,
    },
    {
        label: 'Услуги',
        href: '#services',
        icon: BriefcaseBusiness,
    },
    {
        label: 'Работы',
        href: '#portfolio',
        icon: Image,
    },
    {
        label: 'Запись',
        href: '#booking',
        icon: CalendarDays,
    },
    {
        label: 'Контакты',
        href: '#contacts',
        icon: Phone,
    },
];

export function MobileBottomNav() {
    return (
        <nav
            className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 rounded-full border border-white/70 bg-white/75 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur-2xl md:hidden"
            aria-label="Мобильная навигация"
        >
            <div className="grid grid-cols-5 gap-1">
                {mobileNav.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-[10px] text-[var(--color-muted)] transition hover:bg-white hover:text-[var(--color-accent)]"
                        >
                            <Icon size={17} />
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}