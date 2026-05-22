'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const posts = [
    {
        title: 'Как ухаживать за ресницами после наращивания',
        text: 'Простые правила, которые помогут продлить носку и сохранить аккуратный вид.',
        tag: 'Уход',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'Какой эффект ресниц выбрать под форму глаз',
        text: 'Разбираем натуральный, лисий, мокрый и кукольный эффект.',
        tag: 'Гайд',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'Ламинирование ресниц: кому подходит процедура',
        text: 'Что даёт ламинирование и как понять, подходит ли оно именно вам.',
        tag: 'Процедуры',
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop',
    },
];

export function BlogSection() {
    return (
        <section id="blog" className="section-padding bg-[#fbf3ee]">
            <div className="container-luxury">
                <div className="flex items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="Блог"
                        title="Полезное о ресницах и бровях"
                        text="Экспертные статьи помогают клиентам лучше понимать процедуры, а сайту — продвигаться в поиске."
                    />

                    <a
                        href="#"
                        className="mb-10 hidden items-center gap-2 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)] md:flex"
                    >
                        Все статьи
                        <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 34 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65, delay: index * 0.08 }}
                            className="group overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute left-5 top-5 rounded-full bg-white/75 px-4 py-2 text-xs font-medium text-[var(--color-accent)] backdrop-blur-xl">
                                    {post.tag}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-3 text-xl font-semibold leading-snug">
                                    {post.title}
                                </h3>

                                <p className="mb-6 text-sm leading-6 text-[var(--color-muted)]">
                                    {post.text}
                                </p>

                                <button className="flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition group-hover:gap-3">
                                    Читать статью
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}