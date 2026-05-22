'use client';

import { motion } from 'motion/react';
import { CalendarDays, Heart, ShieldCheck, Sparkles } from 'lucide-react';

const advantages = [
    {
        icon: Sparkles,
        title: 'Индивидуальный подбор',
        text: 'Эффект под форму глаз',
    },
    {
        icon: ShieldCheck,
        title: 'Качественные материалы',
        text: 'Безопасно и аккуратно',
    },
    {
        icon: Heart,
        title: 'Стерильность',
        text: 'Чистота на каждом этапе',
    },
    {
        icon: CalendarDays,
        title: 'Опыт работы',
        text: 'Более 3 лет',
    },
];

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#f8f1ed] pt-28">
            <div className="absolute left-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#ecd5ca]/70 blur-3xl" />
            <div className="absolute right-[-160px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#d6a18c]/30 blur-3xl" />

            <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 45, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-20 pb-28 lg:pb-20"
                >
                    <p className="mb-6 text-sm uppercase tracking-[0.42em] text-[#b88973]">
                        Lash & Brow Studio
                    </p>

                    <h1 className="mb-7 max-w-2xl text-5xl font-semibold leading-[1.05] text-[#2a211d] md:text-7xl">
                        Идеальный взгляд каждый день
                    </h1>

                    <p className="mb-9 max-w-xl text-lg leading-8 text-[#6d625d]">
                        Профессиональное наращивание ресниц и оформление бровей
                        с любовью к деталям в пгт Первомайское, Республика Крым.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button className="rounded-full bg-[#c28f7c] px-8 py-4 font-medium text-white shadow-xl shadow-[#c28f7c]/30 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#ad7a68]">
                            Записаться онлайн
                        </button>

                        <button className="rounded-full border border-[#c28f7c]/40 bg-white/50 px-8 py-4 font-medium text-[#2a211d] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white">
                            Смотреть работы
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.04, x: 45 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-0 z-10 hidden h-full w-[58%] lg:block"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop"
                        alt="Красивый beauty образ, ресницы и брови"
                        className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8f1ed] via-[#f8f1ed]/45 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f1ed]/15 via-transparent to-[#f8f1ed]/25" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="absolute bottom-28 right-16 flex h-36 w-36 items-center justify-center rounded-full border border-white/70 bg-white/20 text-center backdrop-blur-xl"
                    >
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white">
                            Качество
                            <br />
                            безопасность
                            <br />
                            комфорт
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.4 }}
                className="relative z-30 mx-auto -mt-20 grid max-w-7xl gap-4 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-2xl shadow-[#b88973]/10 backdrop-blur-2xl md:grid-cols-4"
            >
                {advantages.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 + index * 0.08 }}
                            className="rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                        >
                            <Icon className="mb-4 h-7 w-7 text-[#c28f7c]" />

                            <h3 className="mb-2 text-sm font-semibold text-[#2a211d]">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-6 text-[#7a6d67]">
                                {item.text}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}