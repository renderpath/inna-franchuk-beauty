'use client';

import Link from 'next/link';

import { siteConfig } from '@/lib/constants/site';

export function Header() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl">
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-wide text-[#2a2a2a]"
                >
                    {siteConfig.masterName}
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {siteConfig.navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-[#4f4f4f] transition hover:text-[#000]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button className="rounded-full bg-[#2a2a2a] px-5 py-3 text-sm text-white transition duration-300 hover:scale-105 hover:bg-[#3a2f2a]">
                    Записаться
                </button>
            </div>
        </header>
    );
}