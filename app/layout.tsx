import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Инна Франчук — ресницы и брови в Первомайском, Крым',
        template: '%s | Инна Франчук Beauty',
    },
    description:
        'Наращивание ресниц, ламинирование ресниц, оформление и ламинирование бровей в пгт Первомайское, Республика Крым. Мастер Инна Франчук.',
    keywords: [
        'Инна Франчук',
        'ресницы Первомайское',
        'брови Первомайское',
        'наращивание ресниц Первомайское',
        'ламинирование ресниц Крым',
        'оформление бровей Первомайское',
        'мастер ресниц Крым',
        'lash brow Crimea',
    ],
    openGraph: {
        title: 'Инна Франчук — ресницы и брови в Первомайском',
        description:
            'Premium lash & brow studio в пгт Первомайское, Республика Крым. Онлайн-запись, портфолио, прайс и отзывы.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Инна Франчук Beauty',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>{children}</body>
        </html>
    );
}