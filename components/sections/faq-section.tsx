'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

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
        answer: 'Первые 24 часа лучше избегать воды, сауны, бани и активного трения глаз. Также не рекомендуется использовать масла на ресницах.',
    },
];

export function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-[var(--color-bg)]">
            <div className="container-luxury grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Ответы на частые вопросы"
                    text="Собрала всё, что обычно важно знать перед первой записью."
                />

                <div className="grid gap-4">
                    {faqs.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={item.question}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.06 }}
                                className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white/70 shadow-[var(--shadow-soft)] backdrop-blur-xl"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-6 p-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base font-semibold">
                                        {item.question}
                                    </span>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf3ee] text-[var(--color-accent)]"
                                    >
                                        <Plus size={18} />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28 }}
                                        >
                                            <p className="px-6 pb-6 text-sm leading-7 text-[var(--color-muted)]">
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