'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarDays, CheckCircle2, Send, Sparkles } from 'lucide-react';

const bookingSchema = z.object({
    name: z.string().min(2, 'Введите имя'),
    phone: z.string().min(10, 'Введите корректный телефон'),
    service: z.string().min(1, 'Выберите услугу'),
    comment: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function CtaSection() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            name: '',
            phone: '',
            service: '',
            comment: '',
        },
    });

    const onSubmit = async (data: BookingFormData) => {
        setIsSuccess(false);

        console.log('Booking form data:', data);

        await new Promise((resolve) => setTimeout(resolve, 800));

        setIsSuccess(true);
        reset();
    };

    return (
        <section
            id="booking"
            className="relative overflow-hidden bg-[#fff8f4] py-20 md:py-24 lg:py-32"
        >
            <div className="absolute bottom-[-220px] left-[-180px] h-[420px] w-[420px] rounded-full bg-[#f0d8cf]/70 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="container-luxury relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 42 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8 }}
                    className="grid overflow-hidden rounded-[30px] border border-[#ead3c9] bg-white/72 shadow-[0_28px_90px_rgba(177,132,115,0.14)] backdrop-blur-2xl md:rounded-[44px] lg:grid-cols-[0.9fr_1.1fr]"
                >
                    <div className="relative min-h-[420px] overflow-hidden md:min-h-[520px] lg:min-h-[620px]">
                        <img
                            src="/images/services-editorial.png"
                            alt="Запись на ресницы и брови"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d211d]/50 via-transparent to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/55 bg-white/18 p-5 text-white backdrop-blur-2xl md:bottom-8 md:left-8 md:right-8 md:rounded-[28px] md:p-7">
                            <div className="mb-3 flex items-center gap-3 md:mb-4">
                                <Sparkles size={18} />

                                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] md:text-[13px]">
                                    Online booking
                                </p>
                            </div>

                            <h2 className="text-[30px] font-semibold leading-tight md:text-[38px]">
                                Запишитесь
                                <br />
                                на удобное время
                            </h2>
                        </div>
                    </div>

                    <div className="p-5 sm:p-7 md:p-10 lg:p-12">
                        <div className="mb-8 md:mb-10">
                            <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                                    Запись
                                </span>

                                <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                            </div>

                            <h2 className="mb-5 text-[40px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#2d211d] sm:text-[48px] md:mb-6 md:text-[56px]">
                                Готовы к
                                <br />
                                преображению?
                            </h2>

                            <p className="max-w-[560px] text-[16px] leading-8 text-[#7b6b65] md:text-[18px]">
                                Оставьте заявку — мастер свяжется с вами,
                                поможет выбрать услугу, эффект и удобное время.
                            </p>
                        </div>

                        <form
                            className="grid gap-4 md:gap-5"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <label className="grid gap-2">
                                <span className="text-[14px] font-semibold text-[#2d211d]">
                                    Ваше имя
                                </span>

                                <input
                                    type="text"
                                    placeholder="Например, Анна"
                                    {...register('name')}
                                    className="h-13 rounded-[16px] border border-[#ead3c9] bg-[#fff8f4]/80 px-4 text-[15px] text-[#2d211d] outline-none transition focus:border-[#c58e7b] focus:bg-white md:h-15 md:rounded-[18px] md:px-5"
                                />

                                {errors.name && (
                                    <span className="text-[13px] text-[#b87965]">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>

                            <label className="grid gap-2">
                                <span className="text-[14px] font-semibold text-[#2d211d]">
                                    Телефон
                                </span>

                                <input
                                    type="tel"
                                    placeholder="+7 (___) ___-__-__"
                                    {...register('phone')}
                                    className="h-13 rounded-[16px] border border-[#ead3c9] bg-[#fff8f4]/80 px-4 text-[15px] text-[#2d211d] outline-none transition focus:border-[#c58e7b] focus:bg-white md:h-15 md:rounded-[18px] md:px-5"
                                />

                                {errors.phone && (
                                    <span className="text-[13px] text-[#b87965]">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </label>

                            <label className="grid gap-2">
                                <span className="text-[14px] font-semibold text-[#2d211d]">
                                    Услуга
                                </span>

                                <select
                                    {...register('service')}
                                    className="h-13 rounded-[16px] border border-[#ead3c9] bg-[#fff8f4]/80 px-4 text-[15px] text-[#2d211d] outline-none transition focus:border-[#c58e7b] focus:bg-white md:h-15 md:rounded-[18px] md:px-5"
                                >
                                    <option value="">Выберите услугу</option>
                                    <option>Классическое наращивание</option>
                                    <option>2D / 3D объём</option>
                                    <option>Мокрый эффект</option>
                                    <option>Ламинирование ресниц</option>
                                    <option>Оформление бровей</option>
                                    <option>Комплексные услуги</option>
                                </select>

                                {errors.service && (
                                    <span className="text-[13px] text-[#b87965]">
                                        {errors.service.message}
                                    </span>
                                )}
                            </label>

                            <label className="grid gap-2">
                                <span className="text-[14px] font-semibold text-[#2d211d]">
                                    Комментарий
                                </span>

                                <textarea
                                    rows={4}
                                    placeholder="Желаемая дата, время или вопрос"
                                    {...register('comment')}
                                    className="resize-none rounded-[16px] border border-[#ead3c9] bg-[#fff8f4]/80 px-4 py-4 text-[15px] text-[#2d211d] outline-none transition focus:border-[#c58e7b] focus:bg-white md:rounded-[18px] md:px-5"
                                />
                            </label>

                            {isSuccess && (
                                <div className="flex items-start gap-3 rounded-[16px] border border-[#cde8cf] bg-[#f0fff2] px-4 py-4 text-[14px] leading-6 text-[#3f7d45] md:items-center md:rounded-[18px] md:px-5">
                                    <CheckCircle2
                                        size={18}
                                        className="mt-1 shrink-0 md:mt-0"
                                    />
                                    Заявка успешно подготовлена. Backend
                                    подключим следующим этапом.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[#cf8f78] px-7 text-[15px] font-semibold text-white shadow-[0_18px_45px_rgba(183,123,104,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#b87965] disabled:cursor-not-allowed disabled:opacity-70 md:mt-3 md:h-15 md:px-10 md:text-[16px]"
                            >
                                {isSubmitting
                                    ? 'Отправляем...'
                                    : 'Отправить заявку'}
                                <Send size={18} />
                            </button>

                            <div className="mt-1 flex items-start gap-3 text-[12px] leading-6 text-[#7b6b65] md:mt-2 md:text-[13px]">
                                <CalendarDays
                                    size={18}
                                    className="mt-1 shrink-0 text-[#c58e7b] md:mt-0"
                                />
                                После отправки заявка будет уходить в админку,
                                Telegram и на Яндекс.Почту.
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}