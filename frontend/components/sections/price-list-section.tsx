import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const priceGroups = [
    {
        title: 'Наращивание ресниц',
        items: [
            ['Классическое наращивание', '1900 ₽'],
            ['1.5D объём', '2100 ₽'],
            ['2D объём', '2400 ₽'],
            ['3D объём', '2700 ₽'],
            ['Мокрый эффект', '2600 ₽'],
            ['Лисий / кукольный эффект', 'от 2400 ₽'],
        ],
    },
    {
        title: 'Ламинирование ресниц',
        items: [
            ['Ламинирование ресниц', '1500 ₽'],
            ['Ламинирование + окрашивание', '1800 ₽'],
            ['Ботокс / уход для ресниц', '500 ₽'],
        ],
    },
    {
        title: 'Брови',
        items: [
            ['Оформление бровей', '900 ₽'],
            ['Окрашивание бровей', '700 ₽'],
            ['Оформление + окрашивание', '1300 ₽'],
            ['Ламинирование бровей', '1300 ₽'],
            ['Ламинирование + оформление', '1700 ₽'],
        ],
    },
    {
        title: 'Комплексы',
        items: [
            ['Ламинирование ресниц + брови', 'от 2600 ₽'],
            ['Оформление бровей + мокрый эффект', 'от 3300 ₽'],
            ['Полный образ: ресницы + брови', 'от 3500 ₽'],
        ],
    },
];

export function PriceListSection() {
    return (
        <section className="relative overflow-hidden bg-[#fffdfb] py-20 md:py-24 lg:py-32">
            <div className="absolute left-[-220px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#f3ddd4]/70 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="container-luxury relative z-10">
                <div className="mb-12 max-w-[820px] md:mb-16">
                    <div className="mb-5 flex items-center gap-4 md:mb-6 md:gap-5">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c58e7b] md:text-[14px] md:tracking-[0.24em]">
                            Price list
                        </span>

                        <span className="h-px w-12 bg-[#d8a592] md:w-16" />
                    </div>

                    <h1 className="mb-6 text-[42px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#2d211d] sm:text-[52px] md:mb-7 md:text-[64px]">
                        Полный прайс-лист услуг
                    </h1>

                    <p className="max-w-[680px] text-[16px] leading-8 text-[#7b6b65] md:text-[18px]">
                        Цены указаны ориентировочно. Итоговая стоимость зависит
                        от выбранного эффекта, объёма и состояния ресниц или
                        бровей.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {priceGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-[28px] border border-[#ead3c9] bg-white/76 p-5 shadow-[0_24px_80px_rgba(177,132,115,0.1)] backdrop-blur-2xl md:rounded-[36px] md:p-8"
                        >
                            <h2 className="mb-5 text-[28px] font-semibold tracking-[-0.04em] text-[#2d211d] md:mb-7 md:text-[32px]">
                                {group.title}
                            </h2>

                            <div className="grid gap-3 md:gap-4">
                                {group.items.map(([name, price]) => (
                                    <div
                                        key={name}
                                        className="grid gap-3 rounded-[20px] border border-[#f0ded6] bg-[#fff8f4]/80 p-4 sm:flex sm:items-center sm:justify-between sm:gap-6 md:rounded-[22px] md:p-5"
                                    >
                                        <div className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c58e7b]" />

                                            <span className="text-[15px] font-medium leading-6 text-[#3c2d28] md:text-[16px]">
                                                {name}
                                            </span>
                                        </div>

                                        <span className="whitespace-nowrap pl-8 text-[16px] font-semibold text-[#c58e7b] sm:pl-0 md:text-[17px]">
                                            {price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-[30px] bg-[#2d211d] p-6 text-white shadow-[0_24px_80px_rgba(45,33,29,0.14)] md:mt-12 md:rounded-[36px] md:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h3 className="mb-3 text-[30px] font-semibold tracking-[-0.04em] md:text-[34px]">
                                Не знаете, что выбрать?
                            </h3>

                            <p className="max-w-[620px] text-[15px] leading-7 text-white/65 md:text-[16px]">
                                Оставьте заявку — мастер поможет подобрать
                                услугу, эффект и удобное время записи.
                            </p>
                        </div>

                        <Link
                            href="/booking"
                            className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 text-[14px] font-semibold text-[#2d211d] transition hover:-translate-y-1 md:h-14 md:px-8 md:text-[15px]"
                        >
                            Записаться на консультацию
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}