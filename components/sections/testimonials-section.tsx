'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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
        text: 'Получился красивый объём без тяжести. Носка отличная, всё очень комфортно.',
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

function ReviewCard({
                        review,
                    }: {
    review: {
        name: string;
        service: string;
        text: string;
        image: string;
    };
}) {
    return (
        <article className="mx-2 w-[300px] shrink-0 rounded-[26px] border border-[#ead3c9] bg-white/76 p-5 shadow-[0_18px_55px_rgba(177,132,115,0.1)] backdrop-blur-2xl sm:mx-3 sm:w-[360px] sm:rounded-[30px] sm:p-6 lg:w-[430px] lg:rounded-[34px]">
            <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
                <div className="flex gap-1 text-[#cf8f78]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            size={14}
                            fill="currentColor"
                            className="sm:h-[15px] sm:w-[15px]"
                        />
                    ))}
                </div>

                <span className="rounded-full bg-[#fff1eb] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c58e7b] sm:px-4 sm:py-2 sm:text-[12px]">
                    verified
                </span>
            </div>

            <Quote
                size={28}
                className="mb-4 text-[#cf8f78] sm:mb-5 sm:h-[30px] sm:w-[30px]"
            />

            <p className="mb-6 text-[14px] leading-7 text-[#5f514c] sm:mb-7 sm:text-[16px] sm:leading-8">
                {review.text}
            </p>

            <div className="flex items-center justify-between border-t border-[#ead3c9] pt-5">
                <div>
                    <h3 className="text-[17px] font-semibold text-[#2d211d] sm:text-[19px]">
                        {review.name}
                    </h3>

                    <p className="mt-1 text-[13px] text-[#7b6b65] sm:text-[14px]">
                        {review.service}
                    </p>
                </div>

                <img
                    src={review.image}
                    alt={review.service}
                    className="h-13 w-13 rounded-full object-cover shadow-[0_10px_30px_rgba(177,132,115,0.14)] sm:h-16 sm:w-16"
                />
            </div>
        </article>
    );
}

export function TestimonialsSection() {
    const marqueeReviews = [...reviews, ...reviews];

    return (
        <section
            id="reviews"
            className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-32"
        >
            <div className="absolute right-[-220px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#f0d8cf]/70 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="container-luxury relative z-10 mb-12 md:mb-16">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10">
                    <div>
                        <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                Отзывы
                            </span>

                            <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                        </div>

                        <h2 className="mb-6 max-w-[760px] text-[42px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#2d211d] sm:text-[52px] md:text-[64px]">
                            Что говорят
                            <br />
                            мои клиенты
                        </h2>

                        <p className="max-w-[620px] text-[16px] leading-8 text-[#7b6b65] md:text-[18px]">
                            Отзывы после процедур — про аккуратность, комфорт и
                            результат, который хочется сохранить.
                        </p>
                    </div>

                    <div className="rounded-[28px] border border-[#ead3c9] bg-white/76 p-6 shadow-[0_22px_70px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[34px] md:p-7">
                        <p className="text-[44px] font-semibold leading-none text-[#2d211d] md:text-[56px]">
                            5.0
                        </p>

                        <div className="mt-4 flex gap-1 text-[#cf8f78]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={18}
                                    fill="currentColor"
                                    className="md:h-[19px] md:w-[19px]"
                                />
                            ))}
                        </div>

                        <p className="mt-4 text-[14px] leading-7 text-[#7b6b65] md:text-[15px]">
                            Средняя оценка клиентов после процедур
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-[#fff8f4] to-transparent md:w-32" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-[#fff8f4] to-transparent md:w-32" />

                <motion.div
                    className="flex w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 42,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {marqueeReviews.map((review, index) => (
                        <ReviewCard
                            key={`${review.name}-${review.service}-${index}`}
                            review={review}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}