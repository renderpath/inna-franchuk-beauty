'use client';

import { motion } from 'motion/react';
import { CalendarDays, Sparkles } from 'lucide-react';

import { BookingForm } from '@/components/booking-form/booking-form';

export function CtaSection() {
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

                            <div className="mt-5 flex items-start gap-3 text-[13px] leading-6 text-white/82">
                                <CalendarDays
                                    size={18}
                                    className="mt-1 shrink-0"
                                />

                                <p>
                                    Форма связана с CRM: занятые слоты
                                    автоматически скрываются.
                                </p>
                            </div>
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
                                Выберите услуги, дату и свободное время. Заявка
                                сразу попадёт в CRM-админку.
                            </p>
                        </div>

                        <BookingForm />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}