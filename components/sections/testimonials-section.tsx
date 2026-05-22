'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const testimonials = [
    {
        name: 'Мария',
        text: 'Очень аккуратная работа, ресницы выглядят натурально и красиво. Носились отлично!',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop',
    },
    {
        name: 'Анастасия',
        text: 'Понравился подход и атмосфера. Мастер помогла подобрать эффект под мои глаза.',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&auto=format&fit=crop',
    },
    {
        name: 'Екатерина',
        text: 'Брови получились очень ухоженными. Всё чисто, красиво и без спешки.',
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop',
    },
];

export function TestimonialsSection() {
    return (
        <section id="reviews" className="section-padding bg-[var(--color-bg)]">
            <div className="container-luxury">
                <div className="flex items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="Отзывы"
                        title="Отзывы моих клиентов"
                        text="Спасибо за доверие и тёплые слова после процедур."
                    />

                    <p className="mb-10 hidden text-4xl font-semibold text-[var(--color-accent)] md:block">
                        5.0 ★
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.article
                            key={item.name}
                            initial={{ opacity: 0, y: 34 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65, delay: index * 0.08 }}
                            className="rounded-[32px] border border-[var(--color-border)] bg-white/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                        >
                            <div className="mb-5 flex gap-1 text-[#d7a06f]">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        size={16}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>

                            <p className="mb-6 text-sm leading-7 text-[var(--color-muted)]">
                                {item.text}
                            </p>

                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fbf3ee] text-sm font-semibold text-[var(--color-accent)]">
                                    {item.name[0]}
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-[var(--color-muted)]">
                                        Клиент студии
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-[22px]">
                                <img
                                    src={item.image}
                                    alt={`Работа для клиента ${item.name}`}
                                    className="h-36 w-full object-cover transition duration-700 hover:scale-110"
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}