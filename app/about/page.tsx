import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    Award,
    Heart,
    ShieldCheck,
    Sparkles,
    Star,
} from 'lucide-react';

import { SiteHeader } from '@/components/layout/site-header';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';

export const metadata: Metadata = {
    title: 'О мастере — Инна Франчук',
    description:
        'Инна Франчук — мастер по наращиванию ресниц, ламинированию ресниц и оформлению бровей в пгт Первомайское, Республика Крым.',
};

const philosophy = [
    {
        icon: Sparkles,
        title: 'Не перегружать образ',
        text: 'Я подбираю эффект так, чтобы ресницы и брови подчёркивали внешность, а не спорили с ней.',
    },
    {
        icon: ShieldCheck,
        title: 'Работать безопасно',
        text: 'Чистота, аккуратность и бережная техника — база каждой процедуры.',
    },
    {
        icon: Heart,
        title: 'Создавать комфорт',
        text: 'Для меня важно, чтобы процедура была спокойной, понятной и приятной.',
    },
];

const steps = [
    {
        number: '01',
        title: 'Знакомство',
        text: 'Обсуждаем пожелания, привычный стиль и то, какой результат хочется получить.',
    },
    {
        number: '02',
        title: 'Подбор эффекта',
        text: 'Смотрю форму глаз, черты лица и подбираю изгиб, объём и форму.',
    },
    {
        number: '03',
        title: 'Процедура',
        text: 'Работаю аккуратно, без спешки, с вниманием к каждой детали.',
    },
    {
        number: '04',
        title: 'Рекомендации',
        text: 'Рассказываю, как ухаживать за результатом, чтобы он держался дольше.',
    },
];

const stats = [
    { value: '3+', label: 'года опыта' },
    { value: '1000+', label: 'процедур' },
    { value: '5.0', label: 'оценка клиентов' },
];

const styleGallery = [
    '/images/portfolio/portfolio-1.png',
    '/images/portfolio/portfolio-2.png',
    '/images/portfolio/portfolio-3.png',
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />

            <section className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-32">
                <div className="absolute left-[-240px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#f3ded5]/80 blur-3xl md:h-[560px] md:w-[560px]" />
                <div className="absolute bottom-[-260px] right-[-220px] h-[420px] w-[420px] rounded-full bg-[#f7e8df]/90 blur-3xl md:h-[620px] md:w-[620px]" />

                <div className="container-luxury relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Beauty story
                            </span>
                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h1 className="mb-6 text-[44px] font-semibold leading-[1.04] tracking-[-0.06em] text-[#2d211d] sm:text-[56px] md:mb-8 md:text-[76px]">
                            Я создаю
                            <br />
                            не просто ресницы,
                            <br />
                            а ощущение красоты
                        </h1>

                        <p className="mb-6 max-w-[700px] text-[17px] leading-8 text-[#6f5f59] md:mb-8 md:text-[21px] md:leading-9">
                            Меня зовут Инна Франчук. Я lash & brow мастер в пгт
                            Первомайское, Республика Крым.
                        </p>

                        <p className="mb-8 max-w-[700px] text-[15px] leading-7 text-[#7b6b65] md:mb-10 md:text-[17px] md:leading-8">
                            Для меня идеальный результат — это когда взгляд
                            становится выразительнее, но образ остаётся
                            естественным, лёгким и гармоничным.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/booking"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#cf8f78] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(183,123,104,0.22)] transition hover:-translate-y-1 hover:bg-[#b87965] md:px-9"
                            >
                                Записаться
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="rounded-full border border-[#d8b5a7] bg-white/68 px-8 py-4 text-center text-[15px] font-semibold text-[#2d211d] transition hover:-translate-y-1 hover:bg-white md:px-9"
                            >
                                Смотреть работы
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-[34px] bg-[#f3e1d9] p-3 shadow-[0_30px_90px_rgba(177,132,115,0.15)] md:rounded-[54px] md:p-4 md:shadow-[0_36px_120px_rgba(177,132,115,0.18)]">
                            <img
                                src="/images/services-editorial.png"
                                alt="Инна Франчук lash and brow master"
                                className="h-[520px] w-full rounded-[26px] object-cover md:h-[680px] md:rounded-[42px] lg:h-[780px]"
                            />

                            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/65 bg-white/74 p-5 shadow-[0_20px_60px_rgba(50,20,10,0.14)] backdrop-blur-2xl md:bottom-10 md:left-10 md:right-10 md:rounded-[32px] md:p-8">
                                <div className="mb-3 flex items-center gap-2 text-[#cf8f78] md:mb-4">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={15}
                                            fill="currentColor"
                                            className="md:h-[17px] md:w-[17px]"
                                        />
                                    ))}
                                </div>

                                <p className="text-[15px] leading-7 text-[#5f514c] md:text-[18px] md:leading-8">
                                    “Мне важно, чтобы после процедуры вы
                                    чувствовали себя красивее, увереннее и
                                    спокойнее.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-28">
                <div className="container-luxury">
                    <div className="mb-10 max-w-[820px] md:mb-14">
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Моя философия
                            </span>
                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h2 className="text-[40px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#2d211d] sm:text-[52px] md:text-[62px]">
                            Красота должна быть
                            <br />
                            естественной и вашей
                        </h2>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
                        {philosophy.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-[28px] border border-[#ead3c9] bg-white/74 p-6 shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[36px] md:p-8"
                                >
                                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#fff1eb] text-[#c58e7b] md:mb-7 md:h-15 md:w-15">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="mb-3 text-[26px] font-semibold tracking-[-0.04em] text-[#2d211d] md:mb-4 md:text-[30px]">
                                        {item.title}
                                    </h3>

                                    <p className="text-[15px] leading-7 text-[#7b6b65] md:text-[16px] md:leading-8">
                                        {item.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-28">
                <div className="container-luxury grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Процесс
                            </span>
                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h2 className="mb-6 text-[40px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#2d211d] sm:text-[52px] md:mb-7 md:text-[62px]">
                            Как проходит
                            <br />
                            процедура
                        </h2>

                        <p className="max-w-[560px] text-[16px] leading-8 text-[#7b6b65] md:text-[18px]">
                            Всё спокойно, понятно и без суеты — от выбора
                            эффекта до рекомендаций по уходу.
                        </p>
                    </div>

                    <div className="grid gap-4 md:gap-5">
                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="grid gap-4 rounded-[28px] border border-[#ead3c9] bg-white/74 p-6 shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:grid-cols-[90px_1fr] md:gap-6 md:rounded-[34px] md:p-7"
                            >
                                <span className="text-[40px] font-light leading-none tracking-[-0.06em] text-[#c58e7b] md:text-[48px]">
                                    {step.number}
                                </span>

                                <div>
                                    <h3 className="mb-2 text-[26px] font-semibold tracking-[-0.04em] text-[#2d211d] md:mb-3 md:text-[30px]">
                                        {step.title}
                                    </h3>

                                    <p className="text-[15px] leading-7 text-[#7b6b65] md:text-[16px] md:leading-8">
                                        {step.text}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-28">
                <div className="container-luxury grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Доверие
                            </span>
                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h2 className="text-[40px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#2d211d] sm:text-[52px] md:text-[62px]">
                            Почему
                            <br />
                            мне доверяют
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
                        {stats.map((item) => (
                            <article
                                key={item.label}
                                className="rounded-[28px] border border-[#ead3c9] bg-white/74 p-6 text-center shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[34px] md:p-8"
                            >
                                <p className="mb-3 text-[44px] font-semibold leading-none tracking-[-0.06em] text-[#c58e7b] md:text-[54px]">
                                    {item.value}
                                </p>

                                <p className="text-[14px] font-medium text-[#7b6b65] md:text-[15px]">
                                    {item.label}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-28">
                <div className="container-luxury">
                    <div className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                    Мой стиль
                                </span>
                                <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                            </div>

                            <h2 className="max-w-[760px] text-[40px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#2d211d] sm:text-[52px] md:text-[62px]">
                                Нежно,
                                <br />
                                чисто, выразительно
                            </h2>
                        </div>

                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d8b5a7] bg-white/68 px-8 py-4 text-[15px] font-semibold text-[#2d211d] transition hover:-translate-y-1 hover:bg-white"
                        >
                            Смотреть портфолио
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3 md:gap-7">
                        {styleGallery.map((image, index) => (
                            <article
                                key={image}
                                className={[
                                    'overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_24px_80px_rgba(177,132,115,0.12)] md:rounded-[40px]',
                                    index === 1 ? 'md:mt-14' : '',
                                ].join(' ')}
                            >
                                <img
                                    src={image}
                                    alt="Пример работы Инны Франчук"
                                    className="h-[420px] w-full rounded-[24px] object-cover md:h-[520px] md:rounded-[32px]"
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-28">
                <div className="container-luxury">
                    <div className="rounded-[34px] bg-[#2d211d] p-6 text-white shadow-[0_28px_90px_rgba(45,33,29,0.16)] md:rounded-[46px] md:p-14">
                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
                            <div>
                                <div className="mb-5 flex items-center gap-4 text-[#e9b9a7] md:mb-6">
                                    <Award size={22} />
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.22em] md:text-[13px]">
                                        Premium beauty care
                                    </span>
                                </div>

                                <h2 className="mb-5 max-w-[760px] text-[38px] font-semibold leading-[1.06] tracking-[-0.055em] md:mb-6 md:text-[56px]">
                                    Подберём эффект,
                                    <br />
                                    который подходит именно вам
                                </h2>

                                <p className="max-w-[640px] text-[15px] leading-7 text-white/68 md:text-[17px] md:leading-8">
                                    Если вы не знаете, что выбрать — я помогу
                                    определиться с процедурой, формой, изгибом и
                                    эффектом.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                                <Link
                                    href="/booking"
                                    className="rounded-full bg-white px-8 py-4 text-center text-[15px] font-semibold text-[#2d211d] transition hover:-translate-y-1 md:px-9"
                                >
                                    Записаться онлайн
                                </Link>

                                <Link
                                    href="/services"
                                    className="rounded-full border border-white/30 px-8 py-4 text-center text-[15px] font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10 md:px-9"
                                >
                                    Смотреть услуги
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
            <Footer />
            <MobileBottomNav />
        </main>
    );
}