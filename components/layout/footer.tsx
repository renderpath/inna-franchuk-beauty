import Link from 'next/link';
import { Camera, MapPin, Phone } from 'lucide-react';

const footerNav = [
    { label: 'Услуги', href: '#services' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Блог', href: '#blog' },
    { label: 'Запись', href: '#booking' },
];

export function Footer() {
    return (
        <footer
            id="contacts"
            className="bg-[var(--color-text)] px-4 pb-28 pt-16 text-white md:pb-10"
        >
            <div className="container-luxury">
                <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#e6c6b6]">
                            Lash & Brow by Inna
                        </p>

                        <h2 className="mb-5 max-w-lg text-4xl font-semibold leading-tight">
                            Красота начинается с уверенного взгляда
                        </h2>

                        <p className="max-w-md text-sm leading-7 text-white/65">
                            Наращивание ресниц, ламинирование ресниц, оформление
                            и ламинирование бровей в пгт Первомайское,
                            Республика Крым.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                            Навигация
                        </h3>

                        <div className="grid gap-3">
                            {footerNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-white/60 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                            Контакты
                        </h3>

                        <div className="grid gap-4 text-sm text-white/65">
                            <p className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 text-[#e6c6b6]"
                                />
                                пгт Первомайское, Республика Крым
                            </p>

                            <p className="flex items-center gap-3">
                                <Phone size={18} className="text-[#e6c6b6]" />
                                +7 (___) ___-__-__
                            </p>

                            <p className="flex items-center gap-3">
                                <Camera size={18} className="text-[#e6c6b6]" />
                                Instagram / Telegram
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
                    © 2026 Инна Франчук Beauty. Все права защищены.
                </div>
            </div>
        </footer>
    );
}