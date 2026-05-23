'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    CalendarDays,
    CreditCard,
    LayoutDashboard,
    LogOut,
    RefreshCw,
} from 'lucide-react';

import { getOrders } from '@/lib/api';

type Order = {
    id: number;
    name: string;
    phone: string;
    services: string[];
    comment?: string;
    status: string;
    price: number;
    scheduledAt?: string | null;
    createdAt: string;
};

export default function AdminFinancePage() {
    const router = useRouter();

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const loadOrders = async () => {
        try {
            const data = await getOrders();
            setOrders(data);
            setLastUpdated(new Date());
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('admin_token');

        if (!token) {
            router.push('/admin');
            return;
        }

        void loadOrders();

        const interval = window.setInterval(() => {
            void loadOrders();
        }, 10000);

        return () => window.clearInterval(interval);
    }, [router]);

    const totalRevenue = orders.reduce(
        (sum, order) => sum + Number(order.price || 0),
        0
    );

    const completedRevenue = orders
        .filter((order) => order.status === 'COMPLETED')
        .reduce((sum, order) => sum + Number(order.price || 0), 0);

    const averageCheck = orders.length
        ? Math.round(totalRevenue / orders.length)
        : 0;

    const serviceStats = useMemo(() => {
        const map = new Map<string, { count: number; revenue: number }>();

        orders.forEach((order) => {
            order.services?.forEach((service) => {
                const current = map.get(service) || {
                    count: 0,
                    revenue: 0,
                };

                map.set(service, {
                    count: current.count + 1,
                    revenue: current.revenue + Number(order.price || 0),
                });
            });
        });

        return Array.from(map.entries())
            .map(([service, data]) => ({
                service,
                ...data,
            }))
            .sort((a, b) => b.revenue - a.revenue);
    }, [orders]);

    return (
        <main className="min-h-screen bg-[#f7f4f2]">
            <div className="flex min-h-screen">
                <aside className="hidden w-[280px] border-r border-[#ead3c9] bg-white xl:block">
                    <div className="p-8">
                        <h2 className="text-[30px] font-semibold tracking-[-0.05em] text-[#2d211d]">
                            Beauty CRM
                        </h2>

                        <p className="mt-2 text-sm text-[#7b6b65]">
                            Финансовая аналитика
                        </p>
                    </div>

                    <nav className="grid gap-2 px-4">
                        <Link
                            href="/admin/dashboard"
                            className="flex h-14 items-center gap-3 rounded-2xl px-5 text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]"
                        >
                            <LayoutDashboard size={18} />
                            Заявки
                        </Link>

                        <Link
                            href="/admin/calendar"
                            className="flex h-14 items-center gap-3 rounded-2xl px-5 text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]"
                        >
                            <CalendarDays size={18} />
                            Календарь
                        </Link>

                        <Link
                            href="/admin/finance"
                            className="flex h-14 items-center gap-3 rounded-2xl bg-[#cf8f78] px-5 text-sm font-semibold text-white"
                        >
                            <CreditCard size={18} />
                            Финансы
                        </Link>

                        <Link
                            href="/"
                            className="flex h-14 items-center rounded-2xl px-5 text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]"
                        >
                            На сайт
                        </Link>
                    </nav>
                </aside>

                <div className="flex-1 p-4 md:p-8">
                    <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div>
                            <h1 className="text-[42px] font-semibold tracking-[-0.05em] text-[#2d211d]">
                                Финансы
                            </h1>

                            <p className="mt-2 text-[#7b6b65]">
                                Выручка, средний чек и услуги
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {lastUpdated && (
                                <p className="text-sm text-[#7b6b65]">
                                    Обновлено:{' '}
                                    {lastUpdated.toLocaleTimeString('ru-RU')}
                                </p>
                            )}

                            <button
                                type="button"
                                onClick={() => void loadOrders()}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#ead3c9] bg-white px-6 text-sm font-semibold text-[#2d211d]"
                            >
                                <RefreshCw size={17} />
                                Обновить
                            </button>

                            <button
                                onClick={() => {
                                    localStorage.removeItem('admin_token');
                                    router.push('/admin');
                                }}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#ead3c9] bg-white px-6 text-sm font-semibold text-[#2d211d]"
                            >
                                <LogOut size={17} />
                                Выйти
                            </button>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="rounded-[32px] bg-white p-10">
                            Загрузка...
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                                    <p className="text-sm text-[#7b6b65]">
                                        Общая выручка
                                    </p>

                                    <h2 className="mt-3 text-[38px] font-semibold text-[#cf8f78]">
                                        {totalRevenue.toLocaleString('ru-RU')} ₽
                                    </h2>
                                </div>

                                <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                                    <p className="text-sm text-[#7b6b65]">
                                        Завершённые заявки
                                    </p>

                                    <h2 className="mt-3 text-[38px] font-semibold text-green-600">
                                        {completedRevenue.toLocaleString(
                                            'ru-RU'
                                        )}{' '}
                                        ₽
                                    </h2>
                                </div>

                                <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                                    <p className="text-sm text-[#7b6b65]">
                                        Средний чек
                                    </p>

                                    <h2 className="mt-3 text-[38px] font-semibold text-[#2d211d]">
                                        {averageCheck.toLocaleString('ru-RU')} ₽
                                    </h2>
                                </div>

                                <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                                    <p className="text-sm text-[#7b6b65]">
                                        Всего заявок
                                    </p>

                                    <h2 className="mt-3 text-[38px] font-semibold text-[#2d211d]">
                                        {orders.length}
                                    </h2>
                                </div>
                            </div>

                            <div className="rounded-[32px] bg-white p-6 shadow-[0_18px_50px_rgba(177,132,115,0.08)]">
                                <h2 className="mb-6 text-[26px] font-semibold text-[#2d211d]">
                                    Выручка по услугам
                                </h2>

                                <div className="grid gap-4">
                                    {serviceStats.map((item) => (
                                        <div
                                            key={item.service}
                                            className="rounded-2xl border border-[#ead3c9] p-5"
                                        >
                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-[#2d211d]">
                                                        {item.service}
                                                    </h3>

                                                    <p className="mt-1 text-sm text-[#7b6b65]">
                                                        {item.count} записей
                                                    </p>
                                                </div>

                                                <p className="text-[24px] font-semibold text-[#cf8f78]">
                                                    {item.revenue.toLocaleString(
                                                        'ru-RU'
                                                    )}{' '}
                                                    ₽
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {serviceStats.length === 0 && (
                                        <div className="rounded-2xl bg-[#fff8f4] p-6 text-center text-[#7b6b65]">
                                            Данных пока нет
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}