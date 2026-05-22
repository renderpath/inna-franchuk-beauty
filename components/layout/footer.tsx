import Link from 'next/link';
import { Camera, MapPin, Phone, Send } from 'lucide-react';

const footerNav = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/services' },
    { label: 'Портфолио', href: '/portfolio' },
    { label: 'Отзывы', href: '/reviews' },
    { label: 'Блог', href: '/blog' },
    { label: 'Запись', href: '/booking' },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#2d211d] px-4 pb-28 pt-16 text-white md:pb-10 md:pt-20">
            <div className="absolute right-[-220px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#c58e7b]/20 blur-3xl md:h-[520px] md:w-[520px]" />

            <div className="container-luxury relative z-10">
                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:gap-12">
                    <div>
                        <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#e5b9a8] md:text-[13px] md:tracking-[0.24em]">
                            Lash & Brow by Inna
                        </p>

                        <h2 className="mb-6 max-w-[620px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] md:text-[52px]">
                            Красота начинается
                            <br />
                            с уверенного взгляда
                        </h2>

                        <p className="max-w-[520px] text-[15px] leading-7 text-white/62 md:text-[16px] md:leading-8">
                            Наращивание ресниц, ламинирование ресниц, оформление
                            и ламинирование бровей в пгт Первомайское,
                            Республика Крым.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70 md:mb-6 md:text-[13px]">
                            Навигация
                        </h3>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            {footerNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-[15px] text-white/58 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70 md:mb-6 md:text-[13px]">
                            Контакты
                        </h3>

                        <div className="grid gap-5 text-[15px] leading-7 text-white/62">
                            <p className="flex items-start gap-4">
                                <MapPin
                                    size={19}
                                    className="mt-1 shrink-0 text-[#e5b9a8]"
                                />
                                пгт Первомайское, Республика Крым
                            </p>

                            <p className="flex items-center gap-4">
                                <Phone
                                    size={19}
                                    className="shrink-0 text-[#e5b9a8]"
                                />
                                +7 (___) ___-__-__
                            </p>

                            <p className="flex items-center gap-4">
                                <Send
                                    size={19}
                                    className="shrink-0 text-[#e5b9a8]"
                                />
                                Telegram
                            </p>

                            <p className="flex items-center gap-4">
                                <Camera
                                    size={19}
                                    className="shrink-0 text-[#e5b9a8]"
                                />
                                Instagram
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] leading-6 text-white/42 md:mt-14 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Инна Франчук Beauty. Все права защищены.</p>
                    <p>Premium lash & brow studio website</p>
                </div>
            </div>
        </footer>
    );
}