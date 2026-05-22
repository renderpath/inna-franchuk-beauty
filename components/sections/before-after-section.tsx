'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const effects = [
    'Натуральный эффект',
    'Лисий эффект',
    'Мокрый эффект',
    'Кукольный эффект',
];

const stats = [
    {
        value: '3+',
        label: 'года опыта',
    },
    {
        value: '1000+',
        label: 'клиентов',
    },
    {
        value: '98%',
        label: 'возвращаются',
    },
];

export function BeforeAfterSection() {
    return (
        <section id="portfolio" className="section-padding bg-[#fbf3ee]">
            <div className="container-luxury">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[32px] border border-[var(--color-border)] bg-white/65 p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl"
                    >
                        <SectionHeading
                            eyebrow="До / После"
                            title="Результат, который говорит сам за себя"
                        />

                        <div className="relative overflow-hidden rounded-[28px]">
                            <div className="grid grid-cols-2">
                                <img
                                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop"
                                    alt="Ресницы до процедуры"
                                    className="h-[360px] w-full object-cover"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop"
                                    alt="Ресницы после процедуры"
                                    className="h-[360px] w-full object-cover"
                                />
                            </div>

                            <div className="absolute left-1/2 top-0 h-full w-px bg-white/80" />

                            <div className="absolute left-5 top-5 rounded-full bg-white/80 px-4 py-2 text-xs font-medium backdrop-blur-xl">
                                До
                            </div>

                            <div className="absolute right-5 top-5 rounded-full bg-white/80 px-4 py-2 text-xs font-medium backdrop-blur-xl">
                                После
                            </div>

                            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--color-accent)] shadow-xl">
                                ↔
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="grid gap-6"
                    >
                        <div className="rounded-[32px] border border-[var(--color-border)] bg-white/65 p-8 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                            <SectionHeading
                                eyebrow="Популярные эффекты"
                                title="Подберём образ под вашу внешность"
                                text="Нежный натуральный результат или выразительный акцент — подберём эффект под форму глаз и ваш стиль."
                            />

                            <div className="grid gap-4">
                                {effects.map((effect, index) => (
                                    <motion.div
                                        key={effect}
                                        initial={{ opacity: 0, x: 24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        className="flex items-center gap-4 rounded-2xl bg-[#fbf3ee] p-4"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />

                                        <span className="text-sm font-medium">
                                            {effect}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {stats.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="rounded-[24px] border border-[var(--color-border)] bg-white/70 p-6 text-center shadow-[var(--shadow-soft)]"
                                >
                                    <p className="mb-2 text-3xl font-semibold text-[var(--color-accent)]">
                                        {item.value}
                                    </p>

                                    <p className="text-sm text-[var(--color-muted)]">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="overflow-hidden rounded-[32px] shadow-[var(--shadow-soft)]">
                            <img
                                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
                                alt="Мастер по ресницам и бровям"
                                className="h-[260px] w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}