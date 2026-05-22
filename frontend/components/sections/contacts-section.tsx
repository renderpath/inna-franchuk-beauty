'use client';

import { motion } from 'motion/react';
import { Clock, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

const contacts = [
    {
        icon: MapPin,
        label: 'Адрес',
        value: 'пгт Первомайское, Республика Крым',
    },
    {
        icon: Phone,
        label: 'Телефон',
        value: '+7 (___) ___-__-__',
    },
    {
        icon: Send,
        label: 'Telegram',
        value: '@inna_beauty',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: 'Написать мастеру',
    },
];

export function ContactsSection() {
    return (
        <section
            id="contacts"
            className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-32"
        >
            <div className="absolute right-[-220px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#f0d8cf]/70 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="container-luxury relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75 }}
                    className="rounded-[30px] border border-[#ead3c9] bg-white/72 p-6 shadow-[0_24px_80px_rgba(177,132,115,0.12)] backdrop-blur-2xl md:rounded-[44px] md:p-10"
                >
                    <div className="mb-6 flex items-center gap-4 md:mb-8 md:gap-5">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                            Контакты
                        </span>

                        <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                    </div>

                    <h2 className="mb-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#2d211d] sm:text-[52px] md:mb-7 md:text-[56px]">
                        Я всегда
                        <br />
                        на связи
                    </h2>

                    <p className="mb-8 max-w-[560px] text-[16px] leading-8 text-[#7b6b65] md:mb-10 md:text-[18px]">
                        Записаться можно через форму на сайте, Telegram или
                        WhatsApp. Уточните удобное время — и я помогу выбрать
                        подходящую услугу.
                    </p>

                    <div className="grid gap-3 md:gap-4">
                        {contacts.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="flex items-center gap-4 rounded-[22px] border border-[#ead3c9] bg-[#fff8f4]/80 p-4 md:gap-5 md:rounded-[24px] md:p-5"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#c58e7b] shadow-[0_10px_30px_rgba(177,132,115,0.12)] md:h-12 md:w-12">
                                        <Icon size={19} />
                                    </div>

                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.16em] text-[#c58e7b] md:text-[13px]">
                                            {item.label}
                                        </p>

                                        <p className="mt-1 text-[15px] font-medium text-[#2d211d] md:text-[17px]">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-6 rounded-[26px] border border-[#ead3c9] bg-[#fff8f4]/80 p-5 md:mt-8 md:rounded-[28px] md:p-6">
                        <div className="mb-4 flex items-center gap-3 text-[#c58e7b]">
                            <Clock size={20} />
                            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] md:text-[13px]">
                                Часы работы
                            </p>
                        </div>

                        <div className="grid gap-3 text-[15px] text-[#5f514c] md:text-[16px]">
                            <p className="flex justify-between gap-4">
                                <span>Пн — Пт</span>
                                <span>10:00 — 20:00</span>
                            </p>

                            <p className="flex justify-between gap-4">
                                <span>Сб</span>
                                <span>10:00 — 18:00</span>
                            </p>

                            <p className="flex justify-between gap-4">
                                <span>Вс</span>
                                <span>по записи</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: 0.1 }}
                    className="relative min-h-[460px] overflow-hidden rounded-[30px] border border-[#ead3c9] bg-[#f7ebe5] shadow-[0_24px_80px_rgba(177,132,115,0.12)] md:min-h-[560px] md:rounded-[44px] lg:min-h-[680px]"
                >
                    <img
                        src="/images/services-editorial.png"
                        alt="Beauty studio atmosphere"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d211d]/50 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/55 bg-white/18 p-5 text-white backdrop-blur-2xl md:bottom-8 md:left-8 md:right-8 md:rounded-[30px] md:p-7">
                        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] md:mb-4 md:text-[13px]">
                            Пгт Первомайское
                        </p>

                        <h3 className="mb-3 text-[30px] font-semibold leading-tight md:mb-4 md:text-[38px]">
                            Уютное место
                            <br />
                            для вашей красоты
                        </h3>

                        <p className="max-w-[520px] text-[14px] leading-7 text-white/82 md:text-[16px]">
                            Добавим Яндекс.Карту, точный адрес и кнопку
                            построения маршрута на этапе подключения контактов.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}