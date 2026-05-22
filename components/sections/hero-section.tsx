'use client';

import { motion } from 'motion/react';
import { CalendarDays, Heart, ShieldCheck, Sparkles } from 'lucide-react';

const advantages = [
    { icon: Sparkles, title: 'Индивидуальный подход', text: 'Подбор эффекта под форму глаз' },
    { icon: ShieldCheck, title: 'Стерильность', text: 'Безопасность на каждом этапе' },
    { icon: Heart, title: 'Премиум материалы', text: 'Качественные составы и уход' },
    { icon: CalendarDays, title: 'Опыт более 3 лет', text: 'Аккуратная работа с деталями' },
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#fbf3ee] pt-28">
            <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#efd8cc]/80 blur-3xl" />

            <div className="container-luxury relative grid min-h-[760px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9 }}
                    className="relative z-20 pb-20"
                >
                    <p className="mb-6 text-sm uppercase tracking-[0.42em] text-[var(--color-accent)]">
                        Premium Lash & Brow Studio
                    </p>

                    <h1 className="mb-7 max-w-2xl text-5xl font-semibold leading-[1.05] md:text-7xl">
                        Идеальный взгляд каждый день
                    </h1>

                    <p className="mb-9 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                        Профессиональное наращивание ресниц и оформление бровей
                        с любовью к деталям в пгт Первомайское, Республика Крым.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#booking"
                            className="rounded-full bg-[var(--color-accent)] px-8 py-4 text-center font-medium text-white shadow-xl shadow-[#c4937e]/25 transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)]"
                        >
                            Записаться онлайн
                        </a>

                        <a
                            href="#portfolio"
                            className="rounded-full border border-[var(--color-border)] bg-white/55 px-8 py-4 text-center font-medium backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
                        >
                            Смотреть работы
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.04, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.1, delay: 0.1 }}
                    className="absolute right-[-40px] top-0 z-10 hidden h-full w-[58%] overflow-hidden rounded-bl-[80px] lg:block"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop"
                        alt="Модель с выразительными ресницами и бровями"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fbf3ee] via-[#fbf3ee]/45 to-transparent" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="container-luxury relative z-30 -mt-24 grid gap-4 rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-[var(--shadow-card)] backdrop-blur-2xl md:grid-cols-4"
            >
                {advantages.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.08 }}
                            className="rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-soft)]"
                        >
                            <Icon className="mb-4 h-6 w-6 text-[var(--color-accent)]" />
                            <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
                            <p className="text-sm leading-6 text-[var(--color-muted)]">
                                {item.text}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}