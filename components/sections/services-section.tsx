'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Sparkle } from 'lucide-react';

const services = [
    {
        number: '01',
        title: 'Классическое наращивание',
        description: 'Натуральный эффект на каждый день',
        price: 'от 1900 ₽',
        image: '/images/services-editorial.png',
    },
    {
        number: '02',
        title: '2D / 3D объём',
        description: 'Выразительный взгляд без перегруза',
        price: 'от 2400 ₽',
        image: '/images/services-editorial.png',
    },
    {
        number: '03',
        title: 'Мокрый эффект',
        description: 'Трендовый эффект с текстурой',
        price: 'от 2600 ₽',
        image: '/images/services-editorial.png',
    },
    {
        number: '04',
        title: 'Ламинирование ресниц',
        description: 'Изгиб, объём и питание ваших ресниц',
        price: 'от 1500 ₽',
        image: '/images/services-editorial.png',
    },
    {
        number: '05',
        title: 'Оформление бровей',
        description: 'Коррекция формы и окрашивание',
        price: 'от 900 ₽',
        image: '/images/services-editorial.png',
    },
    {
        number: '06',
        title: 'Ламинирование бровей',
        description: 'Идеальная форма и послушные брови',
        price: 'от 1300 ₽',
        image: '/images/services-editorial.png',
    },
    {
        number: '07',
        title: 'Комплексные услуги',
        description: 'Выгодные сочетания процедур',
        price: 'от 2200 ₽',
        image: '/images/services-editorial.png',
    },
];

export function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeService = services[activeIndex];

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-28"
        >
            <div className="absolute left-[-220px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#f3ded5]/80 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="absolute bottom-[-220px] right-[-180px] h-[420px] w-[420px] rounded-full bg-[#eed1c6]/60 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="relative z-10 mx-auto grid w-[min(100%-20px,1480px)] gap-10 md:w-[min(100%-40px,1480px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -44, filter: 'blur(10px)' }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: 'blur(0px)',
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                >
                    <div className="relative h-[420px] overflow-hidden rounded-[28px] shadow-[0_28px_90px_rgba(177,132,115,0.16)] sm:h-[560px] md:rounded-[34px] lg:h-[780px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeService.image + activeIndex}
                                src={activeService.image}
                                alt={activeService.title}
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 h-full w-full object-cover object-center"
                            />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d211d]/20 via-transparent to-transparent" />

                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35,
                            }}
                            className="absolute bottom-4 left-4 z-20 w-[230px] rounded-[18px] border border-white/65 bg-white/72 p-5 shadow-[0_18px_55px_rgba(80,45,35,0.12)] backdrop-blur-2xl sm:bottom-8 sm:left-8 sm:w-[260px] sm:p-7"
                        >
                            <div className="mb-4 flex items-center gap-3 sm:mb-5">
                                <Sparkle
                                    size={18}
                                    className="text-[#c9826e]"
                                    fill="currentColor"
                                />

                                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4b3832] sm:text-[13px]">
                                    Premium care
                                </p>
                            </div>

                            <p className="text-[14px] leading-7 text-[#6e5d56] sm:text-[16px] sm:leading-8">
                                Качественные материалы
                                <br />и безупречный результат
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                rotate: -8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                            }}
                            className="absolute bottom-8 left-[330px] hidden h-[110px] w-[110px] items-center justify-center rounded-full border border-white/60 bg-white/12 text-center backdrop-blur-xl md:flex"
                        >
                            <p className="text-[10px] uppercase leading-[1.5] tracking-[0.28em] text-white">
                                Quality
                                <br />
                                Guarantee
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 44, filter: 'blur(10px)' }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        filter: 'blur(0px)',
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                >
                    <div className="mb-8 md:mb-10">
                        <div className="mb-5 flex items-center gap-4 md:mb-8 md:gap-5">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c9826e] md:text-[14px] md:tracking-[0.24em]">
                                Наши услуги
                            </p>

                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h2 className="mb-5 max-w-[720px] text-[42px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#2d211d] sm:text-[52px] md:text-[64px]">
                            Услуги для
                            <br />
                            вашей красоты
                        </h2>

                        <p className="max-w-[620px] text-[16px] leading-8 text-[#786862] md:text-[18px]">
                            Подбираем идеальный эффект под ваши черты и стиль.
                            Работаем с любовью к деталям и вашим результатом.
                        </p>
                    </div>

                    <div
                        className="overflow-visible rounded-[22px]"
                        onMouseLeave={() => setActiveIndex(0)}
                    >
                        {services.map((service, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <motion.article
                                    key={service.number}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.045,
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className="relative"
                                >
                                    <Link
                                        href="/booking"
                                        className={[
                                            'group grid cursor-pointer items-center gap-3 border-b border-[#e8d2c9] py-5 transition-all duration-300 sm:grid-cols-[66px_1fr_auto_44px] sm:gap-5 md:grid-cols-[82px_1fr_auto_48px] md:gap-6 md:py-6',
                                            'hover:rounded-[18px] hover:border-transparent hover:bg-white/68 hover:px-4 hover:shadow-[0_18px_60px_rgba(177,132,115,0.12)] md:hover:px-7',
                                            isActive
                                                ? 'rounded-[18px] border border-[#ead3c9] bg-white/62 px-4 shadow-[0_18px_60px_rgba(177,132,115,0.1)] md:px-7'
                                                : 'px-0',
                                        ].join(' ')}
                                    >
                                        <span className="text-[28px] font-light tracking-[-0.04em] text-[#c9826e] md:text-[34px]">
                                            {service.number}
                                        </span>

                                        <span>
                                            <span className="block text-[20px] font-semibold leading-snug text-[#2d211d] md:text-[22px]">
                                                {service.title}
                                            </span>

                                            <span className="mt-1 block text-[13px] leading-6 text-[#7c6c66] md:text-[14px]">
                                                {service.description}
                                            </span>
                                        </span>

                                        <span className="whitespace-nowrap text-[16px] font-semibold text-[#2d211d] transition-transform duration-300 group-hover:-translate-x-1 md:text-[18px]">
                                            {service.price}
                                        </span>

                                        <span
                                            className={[
                                                'flex h-10 w-10 items-center justify-center rounded-full transition duration-300 md:h-11 md:w-11',
                                                isActive
                                                    ? 'bg-white text-[#c9826e] shadow-[0_10px_30px_rgba(177,132,115,0.18)]'
                                                    : 'text-[#c9826e] group-hover:bg-white group-hover:shadow-[0_10px_30px_rgba(177,132,115,0.18)]',
                                            ].join(' ')}
                                        >
                                            {isActive ? (
                                                <ArrowRight size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </span>
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center md:mt-10 md:gap-8">
                        <Link
                            href="/services"
                            className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-[#cf8f78] px-8 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(183,123,104,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#b87965] md:px-10"
                        >
                            Смотреть все услуги
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/booking"
                            className="group inline-flex h-14 items-center justify-center text-[15px] font-medium text-[#2d211d] sm:justify-start"
                        >
                            Записаться онлайн

                            <span className="ml-5 h-px w-20 bg-[#cf8f78] transition duration-300 group-hover:w-28" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}