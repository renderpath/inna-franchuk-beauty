'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const services = [
    {
        title: 'Классическое наращивание',
        text: 'Натуральный эффект для аккуратного ежедневного образа',
        price: 'от 1900 ₽',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: '2D — объём',
        text: 'Более выразительный взгляд без перегруза',
        price: 'от 2200 ₽',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'Мокрый эффект',
        text: 'Трендовый эффект с акцентом на выразительность',
        price: 'от 2400 ₽',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'Ламинирование ресниц',
        text: 'Изгиб, питание и естественная красота ресниц',
        price: 'от 1500 ₽',
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop',
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="section-padding bg-[var(--color-bg)]">
            <div className="container-luxury">
                <div className="flex items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow="Услуги"
                        title="Выбери свою красоту"
                        text="Популярные процедуры для выразительного взгляда и аккуратного образа каждый день."
                    />

                    <a
                        href="#booking"
                        className="mb-10 hidden items-center gap-2 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)] md:flex"
                    >
                        Смотреть все услуги
                        <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.65, delay: index * 0.08 }}
                            className="group overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                            </div>

                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold leading-snug">
                                    {service.title}
                                </h3>

                                <p className="mb-6 text-sm leading-6 text-[var(--color-muted)]">
                                    {service.text}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">
                                        {service.price}
                                    </span>

                                    <button
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-bg-soft)] text-[var(--color-accent)] transition group-hover:bg-[var(--color-accent)] group-hover:text-white"
                                        aria-label={`Записаться на ${service.title}`}
                                    >
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}