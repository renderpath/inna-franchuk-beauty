'use client';

import Link from 'next/link';
import { Camera } from 'lucide-react';
import { motion } from 'motion/react';

const nav = [
    { label: 'Главная', href: '#' },
    { label: 'Услуги', href: '#services' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Обо мне', href: '#about' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
];

export function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 top-0 z-50 w-full px-4 pt-5"
        >
            <div className="container-luxury flex h-[68px] items-center justify-between rounded-full border border-white/80 bg-white/70 px-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
                <Link href="#" className="leading-none">
                    <span className="block text-[15px] font-semibold uppercase tracking-[0.24em] text-[var(--color-heading)]">
                        Lash & Brow
                    </span>
                    <span className="block pt-1 text-[12px] italic tracking-[0.08em] text-[var(--color-accent)]">
                        by Inna
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[13px] text-[var(--color-muted)] transition hover:text-[var(--color-heading)]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="#booking"
                        className="luxury-button h-11 px-6 text-[13px]"
                    >
                        Записаться
                    </Link>

                    <button
                        className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/70 text-[var(--color-accent)] transition hover:bg-white sm:flex"
                        aria-label="Социальные сети"
                    >
                        <Camera size={18} />
                    </button>
                </div>
            </div>
        </motion.header>
    );
}