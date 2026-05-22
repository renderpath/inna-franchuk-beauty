import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Sparkles,
} from 'lucide-react';

import { SiteHeader } from '@/components/layout/site-header';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { blogPosts } from '@/lib/blog-data';

type BlogArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
                                           params,
                                       }: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        return {
            title: 'Статья не найдена',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogArticlePage({
                                                  params,
                                              }: BlogArticlePageProps) {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#fff8f4]">
            <SiteHeader />

            <article className="relative overflow-hidden">
                <div className="absolute left-[-240px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#f3ded5]/80 blur-3xl md:h-[560px] md:w-[560px]" />
                <div className="absolute bottom-[20%] right-[-240px] h-[420px] w-[420px] rounded-full bg-[#f7e8df]/90 blur-3xl md:h-[620px] md:w-[620px]" />

                <section className="relative z-10 py-20 md:py-24 lg:py-28">
                    <div className="container-luxury">
                        <Link
                            href="/blog"
                            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#ead3c9] bg-white/70 px-5 py-3 text-[14px] font-semibold text-[#2d211d] shadow-[0_14px_40px_rgba(177,132,115,0.08)] transition hover:-translate-y-1 hover:bg-white md:mb-12 md:px-6"
                        >
                            <ArrowLeft size={17} />
                            Назад к статьям
                        </Link>

                        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
                            <div>
                                <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-7">
                                    <span className="rounded-full bg-[#c58e7b] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white md:px-5 md:py-3 md:text-[13px]">
                                        {post.category}
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-[#ead3c9] bg-white/68 px-4 py-2.5 text-[12px] font-semibold text-[#7b6b65] md:px-5 md:py-3 md:text-[13px]">
                                        <Clock3
                                            size={16}
                                            className="text-[#c58e7b]"
                                        />
                                        {post.readTime} чтения
                                    </span>
                                </div>

                                <h1 className="mb-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.06em] text-[#2d211d] sm:text-[54px] md:mb-8 md:text-[70px]">
                                    {post.title}
                                </h1>

                                <p className="mb-8 max-w-[720px] text-[17px] leading-8 text-[#6f5f59] md:mb-10 md:text-[21px] md:leading-9">
                                    {post.excerpt}
                                </p>

                                <div className="grid gap-4 rounded-[28px] border border-[#ead3c9] bg-white/72 p-5 shadow-[0_20px_60px_rgba(177,132,115,0.1)] backdrop-blur-2xl sm:grid-cols-3 md:rounded-[30px] md:p-6">
                                    <div>
                                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c58e7b] md:text-[12px]">
                                            Тема
                                        </p>

                                        <p className="text-[15px] font-medium text-[#2d211d]">
                                            {post.category}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c58e7b] md:text-[12px]">
                                            Время
                                        </p>

                                        <p className="text-[15px] font-medium text-[#2d211d]">
                                            {post.readTime}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c58e7b] md:text-[12px]">
                                            Автор
                                        </p>

                                        <p className="text-[15px] font-medium text-[#2d211d]">
                                            Инна Франчук
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_30px_90px_rgba(177,132,115,0.14)] md:rounded-[50px] md:p-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-[420px] w-full rounded-[26px] object-cover md:h-[560px] md:rounded-[40px] lg:h-[660px]"
                                    />
                                </div>

                                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/65 bg-white/72 p-5 shadow-[0_20px_60px_rgba(50,20,10,0.14)] backdrop-blur-2xl md:bottom-8 md:left-8 md:right-8 md:rounded-[30px] md:p-6">
                                    <div className="mb-3 flex items-center gap-3 text-[#c58e7b]">
                                        <Sparkles size={18} />

                                        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] md:text-[13px]">
                                            Beauty note
                                        </span>
                                    </div>

                                    <p className="text-[14px] leading-7 text-[#5f514c] md:text-[16px]">
                                        Рекомендации помогают сохранить результат
                                        процедуры аккуратным и красивым дольше.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-10 pb-24 md:pb-32">
                    <div className="container-luxury grid gap-8 lg:grid-cols-[260px_1fr_260px] xl:grid-cols-[280px_1fr_280px]">
                        <aside className="hidden lg:block">
                            <div className="sticky top-32 rounded-[30px] border border-[#ead3c9] bg-white/70 p-6 shadow-[0_18px_55px_rgba(177,132,115,0.08)] backdrop-blur-2xl">
                                <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#c58e7b]">
                                    В статье
                                </p>

                                <div className="grid gap-4 text-[15px] text-[#5f514c]">
                                    <a
                                        href="#intro"
                                        className="hover:text-[#c58e7b]"
                                    >
                                        Введение
                                    </a>

                                    <a
                                        href="#tips"
                                        className="hover:text-[#c58e7b]"
                                    >
                                        Основные советы
                                    </a>

                                    <a
                                        href="#remember"
                                        className="hover:text-[#c58e7b]"
                                    >
                                        Важно помнить
                                    </a>
                                </div>
                            </div>
                        </aside>

                        <div className="rounded-[32px] border border-[#ead3c9] bg-white/78 p-6 shadow-[0_24px_80px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[44px] md:p-12">
                            <div id="intro" className="mb-8 md:mb-10">
                                <p className="text-[20px] font-medium leading-9 tracking-[-0.02em] text-[#2d211d] md:text-[24px] md:leading-10">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div id="tips" className="grid gap-7 md:gap-8">
                                {post.content.map((paragraph, index) => (
                                    <div
                                        key={paragraph}
                                        className="grid gap-4 border-t border-[#ead3c9] pt-7 md:grid-cols-[56px_1fr] md:gap-5 md:pt-8"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1eb] text-[14px] font-semibold text-[#c58e7b] md:h-12 md:w-12 md:text-[15px]">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <p className="text-[17px] leading-8 text-[#5f514c] md:text-[19px] md:leading-9">
                                            {paragraph}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div
                                id="remember"
                                className="mt-10 rounded-[28px] bg-[#fff3ed] p-6 md:mt-12 md:rounded-[34px] md:p-7"
                            >
                                <div className="mb-4 flex items-center gap-3 text-[#c58e7b]">
                                    <CheckCircle2 size={22} />

                                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] md:text-[13px]">
                                        Важно помнить
                                    </p>
                                </div>

                                <p className="text-[15px] leading-7 text-[#5f514c] md:text-[17px] md:leading-8">
                                    Индивидуальные рекомендации лучше уточнять у
                                    мастера после процедуры — они зависят от
                                    выбранной услуги, состояния ресниц или бровей
                                    и желаемого результата.
                                </p>
                            </div>
                        </div>

                        <aside className="hidden lg:block">
                            <div className="sticky top-32 rounded-[30px] bg-[#2d211d] p-6 text-white shadow-[0_18px_55px_rgba(45,33,29,0.14)]">
                                <CalendarDays
                                    size={24}
                                    className="mb-5 text-[#e9b9a7]"
                                />

                                <h3 className="mb-4 text-[26px] font-semibold leading-tight tracking-[-0.04em]">
                                    Хотите подобрать процедуру?
                                </h3>

                                <p className="mb-6 text-[15px] leading-7 text-white/65">
                                    Оставьте заявку — мастер поможет выбрать
                                    услугу и эффект.
                                </p>

                                <Link
                                    href="/booking"
                                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#2d211d] transition hover:-translate-y-1"
                                >
                                    Записаться
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </section>
            </article>

            <Footer />
            <MobileBottomNav />
        </main>
    );
}