'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export function BeforeAfterSection() {
    const [position, setPosition] = useState(50);

    const handleMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const percent = (x / rect.width) * 100;

        setPosition(Math.min(Math.max(percent, 0), 100));
    };

    return (
        <section className="relative overflow-hidden bg-[#fff8f4] py-32">
            {/* BG */}
            <div className="absolute left-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#f2ddd3]/60 blur-3xl" />

            <div className="container-luxury relative z-10">
                {/* TOP */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <div className="mb-6 flex items-center justify-center gap-5">
                        <span className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#c58e7b]">
                            Before / After
                        </span>

                        <span className="h-px w-16 bg-[#d8a592]" />
                    </div>

                    <h2 className="mx-auto mb-7 max-w-[920px] text-[68px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#2d211d]">
                        Результат,
                        <br />
                        который невозможно
                        <br />
                        не заметить
                    </h2>

                    <p className="mx-auto max-w-[680px] text-[18px] leading-8 text-[#7a6b65]">
                        Подчёркиваем естественную красоту,
                        сохраняя лёгкость, аккуратность
                        и натуральность образа.
                    </p>
                </motion.div>

                {/* SLIDER */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                    }}
                    className="relative overflow-hidden rounded-[40px] shadow-[0_40px_120px_rgba(177,132,115,0.16)]"
                >
                    <div
                        className="relative h-[820px] cursor-ew-resize overflow-hidden"
                        onMouseMove={handleMove}
                    >
                        {/* AFTER */}
                        <img
                            src="/images/before-after/after.jpg"
                            alt="After"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* BEFORE */}
                        <div
                            className="absolute inset-y-0 left-0 overflow-hidden"
                            style={{
                                width: `${position}%`,
                            }}
                        >
                            <img
                                src="/images/before-after/before.jpg"
                                alt="Before"
                                className="h-full w-[100vw] max-w-none object-cover"
                            />
                        </div>

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d211d]/25 via-transparent to-transparent" />

                        {/* CENTER LINE */}
                        <div
                            className="absolute top-0 bottom-0 z-20 w-[2px] bg-white"
                            style={{
                                left: `${position}%`,
                            }}
                        >
                            {/* HANDLE */}
                            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/20 backdrop-blur-xl">
                                <div className="flex gap-1">
                                    <div className="h-8 w-[2px] bg-white" />
                                    <div className="h-8 w-[2px] bg-white" />
                                </div>
                            </div>
                        </div>

                        {/* LABELS */}
                        <div className="absolute left-8 top-8 rounded-full border border-white/50 bg-white/14 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                            Before
                        </div>

                        <div className="absolute right-8 top-8 rounded-full border border-white/50 bg-white/14 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                            After
                        </div>

                        {/* FLOATING CARD */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                            }}
                            className="absolute bottom-8 left-8 max-w-[320px] rounded-[28px] border border-white/60 bg-white/72 p-8 shadow-[0_20px_60px_rgba(50,20,10,0.14)] backdrop-blur-2xl"
                        >
                            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b]">
                                Natural beauty
                            </p>

                            <h3 className="mb-4 text-[32px] font-semibold leading-tight text-[#2d211d]">
                                Эффект,
                                <br />
                                который выглядит дорого
                            </h3>

                            <p className="text-[16px] leading-7 text-[#786963]">
                                Идеальная посадка ресниц,
                                аккуратная работа
                                и натуральный результат.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}