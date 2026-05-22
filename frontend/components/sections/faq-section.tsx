'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
    {
        question: 'Сколько держатся наращенные ресницы?',
        answer: 'В среднем 3–5 недель. Срок зависит от ухода, скорости роста натуральных ресниц и выбранного объёма.',
    },
    {
        question: 'Это больно?',
        answer: 'Нет, процедура проходит комфортно. Во время наращивания можно расслабиться и отдохнуть.',
    },
    {
        question: 'Как подготовиться к процедуре?',
        answer: 'Лучше прийти без макияжа на глазах и не использовать жирные кремы или масла в зоне век перед процедурой.',
    },
    {
        question: 'Можно ли с линзами?',
        answer: 'Да, но на время процедуры линзы лучше снять, чтобы глазам было комфортнее.',
    },
    {
        question: 'Что нельзя делать после процедуры?',
        answer: 'Первые 24 часа лучше избегать воды, сауны, бани и активного трения глаз.',
    },
];

export function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-32">
            <div className="absolute left-[-220px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#f0d8cf]/70 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="container-luxury relative z-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75 }}
                >
                    <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                            FAQ
                        </span>

                        <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                    </div>

                    <h2 className="mb-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#2d211d] sm:text-[52px] md:mb-7 md:text-[64px]">
                        Частые
                        <br />
                        вопросы
                    </h2>

                    <p className="max-w-[520px] text-[16px] leading-8 text-[#7b6b65] md:text-[18px]">
                        Всё, что важно знать перед первой записью на процедуру.
                    </p>
                </motion.div>

                <div className="grid gap-3 md:gap-4">
                    {faqs.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={item.question}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.06,
                                }}
                                className="overflow-hidden rounded-[24px] border border-[#ead3c9] bg-white/72 shadow-[0_18px_60px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[28px]"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:gap-6 md:p-7"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-[17px] font-semibold leading-7 text-[#2d211d] md:text-[20px]">
                                        {item.question}
                                    </span>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8ebe4] text-[#c58e7b] md:h-12 md:w-12"
                                    >
                                        <Plus size={19} />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28 }}
                                        >
                                            <p className="px-5 pb-5 text-[15px] leading-7 text-[#7b6b65] md:px-7 md:pb-7 md:text-[16px] md:leading-8">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}