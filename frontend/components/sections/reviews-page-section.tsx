'use client';

import { motion } from 'motion/react';
import { Quote, Sparkles, Star } from 'lucide-react';

const reviews = [
    {
        name: 'Анна',
        service: 'Мокрый эффект',
        text: 'Очень аккуратная работа. Ресницы выразительные, но без перегруза — именно то, что хотела.',
        image: '/images/portfolio/portfolio-1.png',
    },
    {
        name: 'Екатерина',
        service: 'Ламинирование ресниц',
        text: 'Взгляд стал более открытым, ресницы красиво подкручены. Очень естественно и нежно.',
        image: '/images/portfolio/portfolio-2.png',
    },
    {
        name: 'Мария',
        service: 'Оформление бровей',
        text: 'Брови стали аккуратными и ухоженными. Форма идеально подошла к лицу.',
        image: '/images/portfolio/portfolio-3.png',
    },
    {
        name: 'Ольга',
        service: '2D объём',
        text: 'Красивый объём без тяжести. Носка отличная, всё очень комфортно.',
        image: '/images/portfolio/portfolio-4.png',
    },
    {
        name: 'Алина',
        service: 'Брови',
        text: 'Очень понравился мягкий подход. Цвет и форма выглядят натурально.',
        image: '/images/portfolio/portfolio-3.png',
    },
    {
        name: 'Кристина',
        service: 'Классика',
        text: 'Ресницы выглядят дорого и аккуратно. Теперь хочется возвращаться снова.',
        image: '/images/portfolio/portfolio-2.png',
    },
];

export function ReviewsPageSection() {
    return (
        <section className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-32">
            <div className="absolute left-[-240px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#f3ded5]/80 blur-3xl md:h-[560px] md:w-[560px]" />
            <div className="absolute bottom-[-260px] right-[-220px] h-[420px] w-[420px] rounded-full bg-[#f7e8df]/90 blur-3xl md:h-[620px] md:w-[620px]" />

            <div className="container-luxury relative z-10">
                <div className="mb-12 grid gap-8 lg:mb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-12">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Reviews
                            </span>

                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h1 className="mb-6 text-[44px] font-semibold leading-[1.04] tracking-[-0.06em] text-[#2d211d] sm:text-[56px] md:mb-7 md:text-[76px]">
                            Отзывы
                            <br />
                            клиентов
                        </h1>

                        <p className="max-w-[680px] text-[16px] leading-8 text-[#7b6b65] md:text-[19px] md:leading-9">
                            Здесь собраны впечатления после процедур: про
                            аккуратность, комфорт, носку и результат.
                        </p>
                    </div>

                    <div className="rounded-[30px] border border-[#ead3c9] bg-white/76 p-6 shadow-[0_24px_80px_rgba(177,132,115,0.12)] backdrop-blur-2xl md:rounded-[40px] md:p-8">
                        <div className="mb-5 flex items-center gap-3 text-[#c58e7b]">
                            <Sparkles size={21} />

                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] md:text-[13px]">
                                Средняя оценка
                            </span>
                        </div>

                        <p className="text-[56px] font-semibold leading-none tracking-[-0.06em] text-[#2d211d] md:text-[72px]">
                            5.0
                        </p>

                        <div className="mt-5 flex gap-1 text-[#cf8f78]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={20}
                                    fill="currentColor"
                                    className="md:h-[22px] md:w-[22px]"
                                />
                            ))}
                        </div>

                        <p className="mt-5 text-[15px] leading-7 text-[#7b6b65] md:text-[16px]">
                            Клиенты отмечают аккуратность, спокойную атмосферу и
                            естественный результат.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                    {reviews.map((review, index) => (
                        <motion.article
                            key={review.name + review.service}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.06,
                            }}
                            className="group overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/76 p-5 shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(177,132,115,0.16)] md:rounded-[38px] md:p-6"
                        >
                            <div className="mb-5 flex items-center justify-between md:mb-6">
                                <div className="flex gap-1 text-[#cf8f78]">
                                    {Array.from({ length: 5 }).map(
                                        (_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                size={15}
                                                fill="currentColor"
                                                className="md:h-4 md:w-4"
                                            />
                                        )
                                    )}
                                </div>

                                <span className="rounded-full bg-[#fff1eb] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c58e7b] md:px-4 md:py-2 md:text-[12px]">
                                    verified
                                </span>
                            </div>

                            <Quote
                                size={30}
                                className="mb-5 text-[#cf8f78] md:mb-6 md:h-[34px] md:w-[34px]"
                            />

                            <p className="mb-6 text-[15px] leading-7 text-[#5f514c] md:mb-8 md:text-[17px] md:leading-8">
                                {review.text}
                            </p>

                            <div className="mb-5 overflow-hidden rounded-[24px] md:mb-6 md:rounded-[28px]">
                                <img
                                    src={review.image}
                                    alt={review.service}
                                    className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[260px]"
                                />
                            </div>

                            <div className="flex items-center justify-between gap-4 border-t border-[#ead3c9] pt-5 md:pt-6">
                                <div>
                                    <h3 className="text-[19px] font-semibold text-[#2d211d] md:text-[21px]">
                                        {review.name}
                                    </h3>

                                    <p className="mt-1 text-[13px] text-[#7b6b65] md:text-[14px]">
                                        {review.service}
                                    </p>
                                </div>

                                <span className="text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c58e7b] md:text-[13px]">
                                    Beauty result
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}