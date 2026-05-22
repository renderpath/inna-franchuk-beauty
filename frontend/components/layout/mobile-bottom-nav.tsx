'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarDays, Home, Images, Menu, MessageCircle } from 'lucide-react';

const mobileNav = [
    { label: 'Главная', href: '/', icon: Home },
    { label: 'Услуги', href: '/services', icon: Menu },
    { label: 'Работы', href: '/portfolio', icon: Images },
    { label: 'Запись', href: '/booking', icon: CalendarDays },
    { label: 'Контакты', href: '/contacts', icon: MessageCircle },
];

export function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <nav
            className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-20px)] max-w-[460px] -translate-x-1/2 rounded-full border border-white/80 bg-white/84 px-2 py-2 shadow-[0_22px_70px_rgba(177,132,115,0.18)] backdrop-blur-2xl lg:hidden"
            aria-label="Мобильная навигация"
        >
            <div className="grid grid-cols-5 gap-1">
                {mobileNav.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={[
                                'flex flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-[10px] font-medium transition duration-300',
                                isActive
                                    ? 'bg-[#c58e7b] text-white shadow-[0_10px_24px_rgba(197,142,123,0.28)]'
                                    : 'text-[#6f5f59] hover:bg-white hover:text-[#c58e7b]',
                            ].join(' ')}
                        >
                            <Icon size={18} />
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}