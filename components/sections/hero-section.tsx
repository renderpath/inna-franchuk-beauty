'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
    BadgeCheck,
    Clock3,
    HeartHandshake,
    Menu,
    Scissors,
    ShieldCheck,
    X,
} from 'lucide-react';

const navItems = [
    { label: 'Главная', href: '#top' },
    { label: 'Услуги', href: '#services' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
];

const pageLinks = [
    { label: 'Обо мне', href: '/about' },
    { label: 'Блог', href: '/blog' },
];

const advantages = [
    { icon: Scissors, title: 'Индивидуальный', text: 'подход' },
    { icon: BadgeCheck, title: 'Качественные', text: 'материалы' },
    { icon: HeartHandshake, title: 'Стерильность', text: 'и безопасность' },
    { icon: ShieldCheck, title: 'Комфортная', text: 'атмосфера' },
    { icon: Clock3, title: 'Опыт работы', text: 'более 3 лет' },
];

function HeaderContent({
                           onMenuClick,
                       }: {
    onMenuClick: () => void;
}) {
    return (
        <>
            <Link href="/" className="shrink-0 leading-none">
                <span className="block text-[20px] font-semibold uppercase tracking-[0.08em] text-[#2d211d] md:text-[28px]">
                    Lash & Brow
                </span>

                <span className="ml-8 mt-1 block text-[14px] italic text-[#8b6b60] md:ml-12 md:text-[18px]">
                    by Inna
                </span>
            </Link>

            <nav className="hidden items-center gap-8 rounded-full border border-white/55 bg-white/28 px-7 py-4 shadow-[0_10px_40px_rgba(120,90,80,0.08)] backdrop-blur-xl xl:flex">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-[15px] font-medium text-[#342622] transition duration-300 hover:text-[#c58e7b]"
                    >
                        {item.label}
                    </a>
                ))}

                {pageLinks.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-[15px] font-medium text-[#342622] transition duration-300 hover:text-[#c58e7b]"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-3">
                <Link
                    href="/booking"
                    className="hidden rounded-full bg-[#cf9a86] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_18px_42px_rgba(183,123,104,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#b98370] sm:inline-flex"
                >
                    Записаться
                </Link>

                <button
                    type="button"
                    onClick={onMenuClick}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#2d211d] backdrop-blur-xl xl:hidden"
                    aria-label="Открыть меню"
                >
                    <Menu size={22} />
                </button>
            </div>
        </>
    );
}

export function HeroSection() {
    const [showFixedHeader, setShowFixedHeader] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFixedHeader(window.scrollY > 180);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="top"
            className="relative min-h-[860px] overflow-hidden bg-[#f8f2ee] md:min-h-[920px] lg:h-screen lg:min-h-[980px]"
        >
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Beauty hero"
                    className="h-full w-full object-cover object-[62%_center] md:object-center"
                />
            </div>

            <div className="absolute inset-0 bg-[#fff8f4]/38 md:hidden" />
            <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-[#f8f2ee]/96 via-[#f8f2ee]/78 to-transparent md:block" />
            <div className="absolute inset-0 bg-[rgba(255,248,244,0.06)]" />

            <AnimatePresence>
                {showFixedHeader && (
                    <motion.header
                        initial={{ opacity: 0, y: -90 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -90 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed left-1/2 top-3 z-[100] flex w-[min(100%-24px,1320px)] -translate-x-1/2 items-center justify-between rounded-full border border-white/70 bg-white/84 px-4 py-3 shadow-[0_20px_65px_rgba(177,132,115,0.16)] backdrop-blur-2xl md:px-7"
                    >
                        <HeaderContent onMenuClick={() => setIsMenuOpen(true)} />
                    </motion.header>
                )}
            </AnimatePresence>

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
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="ml-auto h-full w-[min(86vw,420px)] bg-[#fff8f4] p-6 shadow-2xl"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <Link href="/" className="leading-none">
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
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2d211d]"
                                    aria-label="Закрыть меню"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <nav className="grid gap-3">
                                {[...navItems, ...pageLinks].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="rounded-2xl border border-[#ead3c9] bg-white/70 px-5 py-4 text-[17px] font-semibold text-[#2d211d]"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                <Link
                                    href="/booking"
                                    className="mt-4 rounded-full bg-[#cf8f78] px-6 py-4 text-center text-[16px] font-semibold text-white"
                                >
                                    Записаться
                                </Link>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 mx-auto flex min-h-[860px] max-w-[1680px] flex-col px-4 pt-6 md:min-h-[920px] md:px-8 md:pt-8 lg:h-full lg:min-h-[980px]">
                <header className="flex items-center justify-between">
                    <HeaderContent onMenuClick={() => setIsMenuOpen(true)} />
                </header>

                <div className="flex flex-1 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 44 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="max-w-[760px] pb-44 pt-20 md:pb-32 lg:pb-24"
                    >
                        <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                            Premium lash & brow studio
                        </p>

                        <h1 className="mb-6 max-w-[660px] text-[44px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#2d211d] sm:text-[56px] md:text-[72px] lg:text-[88px]">
                            Идеальный
                            <br />
                            взгляд каждый день
                        </h1>

                        <p className="mb-8 max-w-[560px] text-[17px] leading-8 text-[#6b5b54] sm:text-[19px] md:text-[22px] lg:text-[24px]">
                            Профессиональное наращивание ресниц и оформление
                            бровей с любовью к деталям
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/booking"
                                className="rounded-full bg-[#cf9a86] px-8 py-4 text-center text-[16px] font-semibold text-white shadow-[0_18px_42px_rgba(183,123,104,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#b98370] md:px-12 md:py-5 md:text-[18px]"
                            >
                                Записаться онлайн
                            </Link>

                            <a
                                href="#portfolio"
                                className="rounded-full border-2 border-[#c99582] bg-white/62 px-8 py-4 text-center text-[16px] font-semibold text-[#2d211d] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/88 md:px-12 md:py-5 md:text-[18px]"
                            >
                                Смотреть работы
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.82, delay: 0.35 }}
                    className="absolute bottom-5 left-1/2 grid w-[calc(100%-24px)] max-w-[1430px] -translate-x-1/2 grid-cols-1 gap-2 overflow-hidden rounded-[22px] border border-white/90 bg-white/80 p-3 shadow-[0_24px_72px_rgba(177,132,115,0.16)] backdrop-blur-2xl sm:grid-cols-2 md:w-[calc(100%-56px)] lg:grid-cols-5 lg:px-8 lg:py-7"
                >
                    {advantages.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.08 }}
                                className="flex items-center gap-3 rounded-2xl p-3 lg:gap-5 lg:border-r lg:border-[#e6cec4] lg:px-5 lg:last:border-r-0"
                            >
                                <Icon className="h-6 w-6 shrink-0 text-[#cf9a86] lg:h-9 lg:w-9" />

                                <p className="text-[13px] font-medium leading-[1.45] text-[#342622] lg:text-[17px]">
                                    {item.title}
                                    <br />
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}