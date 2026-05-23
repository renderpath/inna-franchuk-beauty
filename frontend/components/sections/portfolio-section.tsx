'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const works = [
    {
        number: '01',
        title: 'Мокрый эффект',
        category: 'Наращивание ресниц',
        text: 'Текстурный эффект для выразительного взгляда без ощущения тяжести.',
        image: '/images/portfolio/portfolio-1.png',
    },
    {
        number: '02',
        title: 'Ламинирование ресниц',
        category: 'Ресницы',
        text: 'Естественный изгиб, аккуратность и ухоженный вид каждый день.',
        image: '/images/portfolio/portfolio-2.png',
    },
    {
        number: '03',
        title: 'Оформление бровей',
        category: 'Brows',
        text: 'Чистая форма, мягкая коррекция и гармония с чертами лица.',
        image: '/images/portfolio/portfolio-3.png',
    },
    {
        number: '04',
        title: '2D объём',
        category: 'Lashes',
        text: 'Более заметный результат, который остаётся лёгким и аккуратным.',
        image: '/images/portfolio/portfolio-4.png',
    },
];

export function PortfolioSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeWork = works[activeIndex];

    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-[#fffdfb] py-32"
        >
            <div className="absolute left-[-260px] top-[-180px] h-[620px] w-[620px] rounded-full bg-[#f3ded5]/75 blur-3xl" />
            <div className="absolute bottom-[-260px] right-[-220px] h-[620px] w-[620px] rounded-full bg-[#f7e8df]/90 blur-3xl" />

            <div className="container-luxury relative z-10">
                <div className="mb-20 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-5">
                                <span className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#c58e7b]">
                                    Portfolio timeline
                                </span>

                                <span className="h-px w-16 bg-[#d8a592]" />
                            </div>

                            <Link
                                href="/portfolio"
                                className="group inline-flex items-center gap-3 rounded-full border border-[#e7c9bd] bg-white/74 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#2d211d] shadow-[0_14px_40px_rgba(177,132,115,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#c58e7b] hover:bg-white"
                            >
                                Смотреть галерею

                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff3ed] text-[#c58e7b] transition duration-300 group-hover:bg-[#c58e7b] group-hover:text-white">
                                    <ArrowUpRight size={16} />
                                </span>
                            </Link>
                        </div>

                        <h2 className="max-w-[760px] text-[72px] font-semibold leading-[1.02] tracking-[-0.06em] text-[#2d211d]">
                            Галерея
                            <br />
                            выразительных
                            <br />
                            работ
                        </h2>
                    </div>

                    <p className="max-w-[680px] text-[19px] leading-9 text-[#7b6b65]">
                        Каждая работа подбирается под внешность, форму глаз и
                        желаемый эффект. Наведите на услугу — фото справа
                        изменится.
                    </p>
                </div>

                <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="grid gap-5">
                        {works.map((work, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <motion.button
                                    key={work.number}
                                    type="button"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.06,
                                    }}
                                    className={[
                                        'group grid grid-cols-[86px_1fr_auto] items-center gap-6 rounded-[34px] border p-6 text-left transition duration-300',
                                        isActive
                                            ? 'border-[#dfb7a8] bg-white/84 shadow-[0_28px_90px_rgba(177,132,115,0.14)]'
                                            : 'border-[#ead3c9] bg-white/45 hover:bg-white/70',
                                    ].join(' ')}
                                >
                                    <span
                                        className={[
                                            'text-[46px] font-light tracking-[-0.06em] transition',
                                            isActive
                                                ? 'text-[#c58e7b]'
                                                : 'text-[#d7b0a2]',
                                        ].join(' ')}
                                    >
                                        {work.number}
                                    </span>

                                    <span>
                                        <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b]">
                                            {work.category}
                                        </span>

                                        <span className="block text-[30px] font-semibold leading-tight tracking-[-0.035em] text-[#2d211d]">
                                            {work.title}
                                        </span>

                                        <span
                                            className={[
                                                'mt-3 block max-w-[520px] text-[16px] leading-7 text-[#7b6b65] transition',
                                                isActive
                                                    ? 'opacity-100'
                                                    : 'opacity-70',
                                            ].join(' ')}
                                        >
                                            {work.text}
                                        </span>
                                    </span>

                                    <span
                                        className={[
                                            'flex h-14 w-14 items-center justify-center rounded-full transition duration-300',
                                            isActive
                                                ? 'bg-[#c58e7b] text-white'
                                                : 'bg-[#fff3ed] text-[#c58e7b] group-hover:bg-[#c58e7b] group-hover:text-white',
                                        ].join(' ')}
                                    >
                                        <ArrowUpRight size={20} />
                                    </span>
                                </motion.button>
                            );
                        })}

                        <div className="mt-5 rounded-[34px] bg-[#2d211d] p-8 text-white shadow-[0_28px_90px_rgba(45,33,29,0.13)]">
                            <div className="mb-5 flex items-center gap-3 text-[#e9b9a7]">
                                <Sparkles size={19} />
                                <p className="text-[13px] font-semibold uppercase tracking-[0.22em]">
                                    Personal selection
                                </p>
                            </div>

                            <h3 className="mb-4 text-[36px] font-semibold leading-tight tracking-[-0.04em]">
                                Подберём эффект
                                <br />
                                именно под вас
                            </h3>

                            <p className="mb-7 max-w-[520px] text-[16px] leading-7 text-white/68">
                                Если вы не знаете, что выбрать — мастер поможет
                                подобрать изгиб, объём и форму под ваши глаза.
                            </p>

                            <Link
                                href="/booking"
                                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 py-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#fff8f4]"
                            >
    <span className="relative z-10 text-[15px] font-semibold text-[#2d211d]">
        Получить консультацию
    </span>
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-28 lg:self-start"
                    >
                        <div className="relative overflow-hidden rounded-[48px] bg-[#f3e1d9] p-4 shadow-[0_36px_120px_rgba(177,132,115,0.18)]">
                            <div className="relative h-[820px] overflow-hidden rounded-[38px]">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeWork.image}
                                        src={activeWork.image}
                                        alt={activeWork.title}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{
                                            duration: 0.55,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d211d]/42 via-transparent to-transparent" />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeWork.title}
                                        initial={{ opacity: 0, y: 22 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute bottom-8 left-8 right-8 rounded-[34px] border border-white/62 bg-white/74 p-8 shadow-[0_20px_60px_rgba(50,20,10,0.14)] backdrop-blur-2xl"
                                    >
                                        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b]">
                                            Работа {activeWork.number}
                                        </p>

                                        <h3 className="mb-4 text-[44px] font-semibold leading-none tracking-[-0.04em] text-[#2d211d]">
                                            {activeWork.title}
                                        </h3>

                                        <p className="max-w-[560px] text-[17px] leading-8 text-[#74645e]">
                                            {activeWork.text}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}