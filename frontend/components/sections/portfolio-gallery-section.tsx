'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
    ArrowLeftRight,
    Grid3X3,
    Sparkles,
    UserRound,
    WandSparkles,
} from 'lucide-react';

const galleryModes = [
    {
        label: 'До / После',
        value: 'before-after',
        icon: ArrowLeftRight,
    },
    {
        label: 'Instagram grid',
        value: 'instagram',
        icon: Grid3X3,
    },
    {
        label: 'Кейсы',
        value: 'cases',
        icon: UserRound,
    },
    {
        label: 'Эффекты',
        value: 'effects',
        icon: WandSparkles,
    },
];

const works = [
    {
        title: 'Мокрый эффект',
        category: 'Ресницы',
        image: '/images/portfolio/portfolio-1.png',
        before: '/images/before-after/before.jpg',
        after: '/images/before-after/after.jpg',
        client: 'Анна',
        request: 'Хотелось выразительный взгляд, но без тяжести.',
        result: 'Подобрали мокрый эффект с лёгкой текстурой.',
    },
    {
        title: 'Ламинирование ресниц',
        category: 'Ресницы',
        image: '/images/portfolio/portfolio-2.png',
        before: '/images/before-after/before.jpg',
        after: '/images/before-after/after.jpg',
        client: 'Екатерина',
        request: 'Нужен натуральный изгиб без наращивания.',
        result: 'Сделали ламинирование и уход для блеска.',
    },
    {
        title: 'Оформление бровей',
        category: 'Брови',
        image: '/images/portfolio/portfolio-3.png',
        before: '/images/before-after/before.jpg',
        after: '/images/before-after/after.jpg',
        client: 'Мария',
        request: 'Хотелось аккуратную форму без резких линий.',
        result: 'Сделали мягкую коррекцию и натуральный цвет.',
    },
    {
        title: '2D объём',
        category: 'Ресницы',
        image: '/images/portfolio/portfolio-4.png',
        before: '/images/before-after/before.jpg',
        after: '/images/before-after/after.jpg',
        client: 'Ольга',
        request: 'Нужен объём, но чтобы не выглядело перегруженно.',
        result: 'Выбрали 2D с мягким изгибом.',
    },
];

const effects = [
    {
        title: 'Натуральный эффект',
        category: 'Ресницы',
        text: 'Для тех, кто хочет аккуратный результат на каждый день.',
        image: '/images/portfolio/portfolio-2.png',
    },
    {
        title: 'Мокрый эффект',
        category: 'Ресницы',
        text: 'Текстурный, трендовый и выразительный взгляд.',
        image: '/images/portfolio/portfolio-1.png',
    },
    {
        title: '2D объём',
        category: 'Ресницы',
        text: 'Больше выразительности без ощущения тяжести.',
        image: '/images/portfolio/portfolio-4.png',
    },
    {
        title: 'Мягкие брови',
        category: 'Брови',
        text: 'Форма и цвет, которые гармонируют с лицом.',
        image: '/images/portfolio/portfolio-3.png',
    },
];

export function PortfolioGallerySection() {
    const [activeMode, setActiveMode] = useState('before-after');

    return (
        <section className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-32">
            <div className="absolute left-[-260px] top-[-180px] h-[440px] w-[440px] rounded-full bg-[#f3ded5]/75 blur-3xl md:h-[620px] md:w-[620px]" />
            <div className="absolute bottom-[-260px] right-[-220px] h-[440px] w-[440px] rounded-full bg-[#f7e8df]/90 blur-3xl md:h-[620px] md:w-[620px]" />

            <div className="container-luxury relative z-10">
                <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-10">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.28em]">
                                Portfolio gallery
                            </span>

                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h1 className="mb-6 text-[44px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#2d211d] sm:text-[56px] md:text-[72px]">
                            Галерея
                            <br />
                            реальных работ
                        </h1>

                        <p className="max-w-[700px] text-[16px] leading-8 text-[#7b6b65] md:text-[19px] md:leading-9">
                            Можно посмотреть работы в разных форматах: до/после,
                            визуальная лента, кейсы клиентов и каталог эффектов.
                        </p>
                    </div>

                    <div className="rounded-[28px] border border-[#ead3c9] bg-white/76 p-4 shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[34px] md:p-6">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1eb] text-[#c58e7b] md:h-12 md:w-12">
                                <Sparkles size={20} />
                            </div>

                            <div>
                                <p className="text-[15px] font-semibold text-[#2d211d]">
                                    Формат просмотра
                                </p>

                                <p className="text-[14px] text-[#7b6b65]">
                                    Выберите, как смотреть портфолио
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
                            {galleryModes.map((mode) => {
                                const Icon = mode.icon;
                                const isActive = activeMode === mode.value;

                                return (
                                    <button
                                        key={mode.value}
                                        type="button"
                                        onClick={() => setActiveMode(mode.value)}
                                        className={[
                                            'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-[13px] font-medium transition duration-300 md:px-5 md:text-[14px]',
                                            isActive
                                                ? 'border-[#c58e7b] bg-[#c58e7b] text-white shadow-[0_14px_34px_rgba(197,142,123,0.22)]'
                                                : 'border-[#ead3c9] bg-white/55 text-[#5f514c] hover:border-[#c58e7b] hover:bg-white',
                                        ].join(' ')}
                                    >
                                        <Icon size={16} />
                                        {mode.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeMode === 'before-after' && (
                        <motion.div
                            key="before-after"
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.45 }}
                            className="grid gap-6 lg:grid-cols-2 lg:gap-8"
                        >
                            {works.map((work) => (
                                <article
                                    key={work.title}
                                    className="overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/72 p-3 shadow-[0_24px_80px_rgba(177,132,115,0.12)] backdrop-blur-xl md:rounded-[38px]"
                                >
                                    <div className="grid overflow-hidden rounded-[24px] md:grid-cols-2 md:rounded-[30px]">
                                        <div className="relative h-[280px] sm:h-[360px] md:h-[420px]">
                                            <img
                                                src={work.before}
                                                alt={`${work.title} до`}
                                                className="h-full w-full object-cover"
                                            />

                                            <span className="absolute left-4 top-4 rounded-full bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2d211d] backdrop-blur-xl md:left-5 md:top-5 md:text-[12px]">
                                                До
                                            </span>
                                        </div>

                                        <div className="relative h-[280px] sm:h-[360px] md:h-[420px]">
                                            <img
                                                src={work.after}
                                                alt={`${work.title} после`}
                                                className="h-full w-full object-cover"
                                            />

                                            <span className="absolute left-4 top-4 rounded-full bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2d211d] backdrop-blur-xl md:left-5 md:top-5 md:text-[12px]">
                                                После
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5 md:p-6">
                                        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b]">
                                            {work.category}
                                        </p>

                                        <h3 className="text-[26px] font-semibold tracking-[-0.03em] text-[#2d211d] md:text-[30px]">
                                            {work.title}
                                        </h3>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    )}

                    {activeMode === 'instagram' && (
                        <motion.div
                            key="instagram"
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.45 }}
                            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
                        >
                            {works.map((work, index) => (
                                <article
                                    key={work.title}
                                    className={[
                                        'group relative overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/72 p-3 shadow-[0_22px_70px_rgba(177,132,115,0.1)] md:rounded-[34px]',
                                        index % 2 === 0 ? 'xl:mt-12' : '',
                                    ].join(' ')}
                                >
                                    <div className="relative h-[420px] overflow-hidden rounded-[24px] sm:h-[480px] md:rounded-[26px] lg:h-[520px]">
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d211d]/45 via-transparent to-transparent" />

                                        <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/60 bg-white/74 p-5 backdrop-blur-2xl md:bottom-5 md:left-5 md:right-5 md:rounded-[24px]">
                                            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b]">
                                                {work.category}
                                            </p>

                                            <h3 className="text-[24px] font-semibold leading-tight text-[#2d211d] md:text-[25px]">
                                                {work.title}
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    )}

                    {activeMode === 'cases' && (
                        <motion.div
                            key="cases"
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.45 }}
                            className="grid gap-6 lg:grid-cols-2 lg:gap-8"
                        >
                            {works.map((work) => (
                                <article
                                    key={work.title}
                                    className="grid overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/72 shadow-[0_24px_80px_rgba(177,132,115,0.12)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:rounded-[38px]"
                                >
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="h-[340px] w-full object-cover sm:h-[420px] md:h-full md:min-h-[460px]"
                                    />

                                    <div className="p-6 md:p-8">
                                        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b] md:text-[13px]">
                                            Клиент: {work.client}
                                        </p>

                                        <h3 className="mb-6 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#2d211d] md:text-[34px]">
                                            {work.title}
                                        </h3>

                                        <div className="grid gap-5">
                                            <div>
                                                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#c58e7b] md:text-[13px]">
                                                    Запрос
                                                </p>

                                                <p className="text-[15px] leading-7 text-[#7b6b65] md:text-[16px]">
                                                    {work.request}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#c58e7b] md:text-[13px]">
                                                    Результат
                                                </p>

                                                <p className="text-[15px] leading-7 text-[#7b6b65] md:text-[16px]">
                                                    {work.result}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    )}

                    {activeMode === 'effects' && (
                        <motion.div
                            key="effects"
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.45 }}
                            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:gap-8"
                        >
                            {effects.map((effect) => (
                                <article
                                    key={effect.title}
                                    className="group overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/72 p-3 shadow-[0_22px_70px_rgba(177,132,115,0.1)] md:rounded-[36px]"
                                >
                                    <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[380px] md:h-[420px] md:rounded-[28px]">
                                        <img
                                            src={effect.image}
                                            alt={effect.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-5">
                                        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b]">
                                            {effect.category}
                                        </p>

                                        <h3 className="mb-3 text-[26px] font-semibold tracking-[-0.04em] text-[#2d211d] md:text-[28px]">
                                            {effect.title}
                                        </h3>

                                        <p className="text-[15px] leading-7 text-[#7b6b65]">
                                            {effect.text}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}