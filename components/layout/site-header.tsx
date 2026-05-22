'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CalendarDays, Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/services' },
    { label: 'Портфолио', href: '/portfolio' },
    { label: 'Обо мне', href: '/about' },
    { label: 'Отзывы', href: '/reviews' },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contacts' },
];

export function SiteHeader() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 20);

            if (currentScrollY < 120) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                animate={{
                    y: isVisible ? 0 : -110,
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                    'sticky top-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'border-b border-[#ead3c9]/70 bg-[#fff8f4]/86 shadow-[0_14px_45px_rgba(177,132,115,0.08)] backdrop-blur-2xl'
                        : 'border-b border-[#ead3c9]/40 bg-[#fff8f4]/74 backdrop-blur-xl',
                ].join(' ')}
            >
                <div className="container-luxury flex h-[76px] items-center justify-between md:h-[92px]">
                    <Link href="/" className="shrink-0 leading-none">
                        <span className="block text-[20px] font-semibold uppercase tracking-[0.08em] text-[#2d211d] md:text-[26px]">
                            Lash & Brow
                        </span>

                        <span className="ml-8 mt-1 block text-[14px] italic text-[#8b6b60] md:ml-10 md:text-[16px]">
                            by Inna
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 xl:flex">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={[
                                        'relative text-[15px] font-medium transition duration-300',
                                        isActive
                                            ? 'text-[#c58e7b]'
                                            : 'text-[#3e2f2a] hover:text-[#c58e7b]',
                                    ].join(' ')}
                                >
                                    {item.label}

                                    <span
                                        className={[
                                            'absolute -bottom-2 left-0 h-px bg-[#c58e7b] transition-all duration-300',
                                            isActive
                                                ? 'w-full opacity-100'
                                                : 'w-0 opacity-0',
                                        ].join(' ')}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/booking"
                            className="hidden h-12 items-center gap-3 rounded-full bg-[#cf8f78] px-6 text-[14px] font-semibold text-white shadow-[0_18px_42px_rgba(183,123,104,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#b87965] sm:inline-flex md:h-14 md:px-8 md:text-[15px]"
                        >
                            <CalendarDays size={18} />
                            Записаться
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ead3c9] bg-white/70 text-[#2d211d] shadow-[0_10px_30px_rgba(177,132,115,0.08)] backdrop-blur-xl xl:hidden"
                            aria-label="Открыть меню"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-[#2d211d]/35 backdrop-blur-sm xl:hidden"
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="ml-auto flex h-full w-[min(86vw,420px)] flex-col bg-[#fff8f4] p-6 shadow-2xl"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <Link
                                    href="/"
                                    className="leading-none"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="block text-[20px] font-semibold uppercase tracking-[0.08em] text-[#2d211d]">
                                        Lash & Brow
                                    </span>

                                    <span className="ml-8 mt-1 block text-[14px] italic text-[#8b6b60]">
                                        by Inna
                                    </span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2d211d] shadow-[0_10px_30px_rgba(177,132,115,0.08)]"
                                    aria-label="Закрыть меню"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <nav className="grid gap-3 overflow-y-auto pb-6">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={[
                                                'rounded-2xl border px-5 py-4 text-[17px] font-semibold transition',
                                                isActive
                                                    ? 'border-[#c58e7b] bg-[#c58e7b] text-white shadow-[0_16px_38px_rgba(197,142,123,0.22)]'
                                                    : 'border-[#ead3c9] bg-white/70 text-[#2d211d]',
                                            ].join(' ')}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="mt-auto grid gap-3 border-t border-[#ead3c9] pt-5">
                                <Link
                                    href="/booking"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-full bg-[#cf8f78] px-6 py-4 text-center text-[16px] font-semibold text-white shadow-[0_16px_38px_rgba(183,123,104,0.22)]"
                                >
                                    Записаться
                                </Link>

                                <p className="text-center text-[13px] leading-6 text-[#7b6b65]">
                                    Наращивание ресниц и оформление бровей
                                    <br />в пгт Первомайское
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}