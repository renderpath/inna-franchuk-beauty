'use client';

import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export function CtaSection() {
    return (
        <section id="booking" className="section-padding bg-[#fbf3ee]">
            <div className="container-luxury">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75 }}
                    className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/70 p-6 shadow-[var(--shadow-card)] backdrop-blur-2xl md:p-10 lg:p-12"
                >
                    <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#d8a28d]/30 blur-3xl" />
                    <div className="absolute bottom-[-160px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#efd8cc]/70 blur-3xl" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fbf3ee] px-4 py-2 text-sm text-[var(--color-accent)]">
                                <Sparkles size={16} />
                                Онлайн-запись
                            </div>

                            <h2 className="mb-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                                Запишитесь на процедуру и получите консультацию
                            </h2>

                            <p className="mb-8 max-w-lg text-base leading-7 text-[var(--color-muted)]">
                                Оставьте заявку — мастер свяжется с вами, поможет выбрать услугу,
                                эффект и удобное время записи.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {['Ответим быстро', 'Подберём эффект', 'Запись онлайн'].map(
                                    (item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-[var(--color-border)] bg-white/60 p-4 text-sm font-medium"
                                        >
                                            {item}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <form className="rounded-[32px] border border-[var(--color-border)] bg-[#fbf3ee]/80 p-5 shadow-[var(--shadow-soft)] md:p-6">
                            <div className="grid gap-4">
                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Ваше имя</span>
                                    <input
                                        type="text"
                                        placeholder="Например, Анна"
                                        className="h-14 rounded-2xl border border-[var(--color-border)] bg-white/80 px-5 text-sm outline-none transition focus:border-[var(--color-accent)]"
                                    />
                                </label>

                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Телефон</span>
                                    <input
                                        type="tel"
                                        placeholder="+7 (___) ___-__-__"
                                        className="h-14 rounded-2xl border border-[var(--color-border)] bg-white/80 px-5 text-sm outline-none transition focus:border-[var(--color-accent)]"
                                    />
                                </label>

                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Услуга</span>
                                    <select
                                        className="h-14 rounded-2xl border border-[var(--color-border)] bg-white/80 px-5 text-sm outline-none transition focus:border-[var(--color-accent)]"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Выберите услугу
                                        </option>
                                        <option>Наращивание ресниц</option>
                                        <option>Ламинирование ресниц</option>
                                        <option>Оформление бровей</option>
                                        <option>Ламинирование бровей</option>
                                    </select>
                                </label>

                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Комментарий</span>
                                    <textarea
                                        placeholder="Желаемая дата, эффект или вопрос"
                                        rows={4}
                                        className="resize-none rounded-2xl border border-[var(--color-border)] bg-white/80 px-5 py-4 text-sm outline-none transition focus:border-[var(--color-accent)]"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 font-medium text-white shadow-xl shadow-[#c4937e]/25 transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)]"
                                >
                                    Отправить заявку
                                    <Send size={17} />
                                </button>

                                <p className="text-xs leading-5 text-[var(--color-muted)]">
                                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}