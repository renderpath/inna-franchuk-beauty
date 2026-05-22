'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';

import { blogCategories, blogPosts } from '@/lib/blog-data';

export function BlogPageSection() {
    const [activeCategory, setActiveCategory] = useState('Все');
    const [search, setSearch] = useState('');

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory =
                activeCategory === 'Все' || post.category === activeCategory;

            const matchesSearch =
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(search.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    return (
        <section className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-32">
            <div className="container-luxury">
                <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-10">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Beauty blog
                            </span>
                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h1 className="mb-6 text-[44px] font-semibold leading-[1.04] tracking-[-0.06em] text-[#2d211d] sm:text-[56px] md:text-[72px]">
                            Полезное
                            <br />
                            о ресницах
                            <br />и бровях
                        </h1>

                        <p className="max-w-[680px] text-[16px] leading-8 text-[#7b6b65] md:text-[19px] md:leading-9">
                            Советы по уходу, выбору эффекта и подготовке к
                            процедурам.
                        </p>
                    </div>

                    <div className="rounded-[28px] border border-[#ead3c9] bg-white/76 p-4 shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[34px] md:p-6">
                        <label className="mb-4 flex h-13 items-center gap-3 rounded-full border border-[#ead3c9] bg-[#fff8f4] px-4 md:mb-5 md:h-14 md:px-5">
                            <Search size={18} className="text-[#c58e7b]" />

                            <input
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Поиск статьи"
                                className="w-full bg-transparent text-[14px] text-[#2d211d] outline-none placeholder:text-[#9b8178] md:text-[15px]"
                            />
                        </label>

                        <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
                            {blogCategories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={[
                                        'shrink-0 rounded-full border px-4 py-3 text-[13px] font-medium transition duration-300 md:px-5 md:text-[14px]',
                                        activeCategory === category
                                            ? 'border-[#c58e7b] bg-[#c58e7b] text-white'
                                            : 'border-[#ead3c9] bg-white/60 text-[#5f514c] hover:border-[#c58e7b]',
                                    ].join(' ')}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/76 p-3 shadow-[0_22px_70px_rgba(177,132,115,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(177,132,115,0.16)] md:rounded-[38px]"
                            >
                                <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[320px] md:h-[360px] md:rounded-[30px]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <span className="absolute left-4 top-4 rounded-full bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c58e7b] backdrop-blur-xl md:left-5 md:top-5 md:text-[12px]">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="p-4 md:p-5">
                                    <p className="mb-3 text-[13px] text-[#7b6b65]">
                                        {post.readTime} чтения
                                    </p>

                                    <h2 className="mb-4 text-[24px] font-semibold leading-tight tracking-[-0.04em] text-[#2d211d] md:text-[28px]">
                                        {post.title}
                                    </h2>

                                    <p className="mb-6 text-[14px] leading-7 text-[#7b6b65] md:text-[15px]">
                                        {post.excerpt}
                                    </p>

                                    <span className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#c58e7b]">
                                        Читать статью
                                        <ArrowUpRight size={18} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[30px] border border-[#ead3c9] bg-white/76 p-8 text-center shadow-[0_22px_70px_rgba(177,132,115,0.1)] md:rounded-[38px]">
                        <h2 className="mb-3 text-[28px] font-semibold text-[#2d211d]">
                            Ничего не найдено
                        </h2>

                        <p className="text-[15px] leading-7 text-[#7b6b65]">
                            Попробуйте изменить запрос или выбрать другую
                            категорию.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}