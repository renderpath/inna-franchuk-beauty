'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/ru';
import { Calendar, momentLocalizer, View } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import {
    CalendarDays,
    ClipboardList,
    CreditCard,
    LogOut,
} from 'lucide-react';

import { getOrders, updateOrderSchedule } from '@/lib/api';

moment.locale('ru');

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

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

type CalendarEvent = {
    id: number;
    title: string;
    start: Date;
    end: Date;
    resource: Order;
};

export default function AdminCalendarPage() {
    const router = useRouter();

    const [orders, setOrders] = useState<Order[]>([]);
    const [view, setView] = useState<View>('week');
    const [date, setDate] = useState(new Date());
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const loadOrders = async () => {
        const data = await getOrders();
        setOrders(data);
    };

    useEffect(() => {
        const token = localStorage.getItem('admin_token');

        if (!token) {
            router.push('/admin');
            return;
        }

        void loadOrders();
    }, [router]);

    const events = useMemo<CalendarEvent[]>(() => {
        return orders
            .filter((order) => order.scheduledAt)
            .map((order) => {
                const start = new Date(order.scheduledAt as string);
                const end = new Date(start);

                end.setMinutes(end.getMinutes() + 60);

                return {
                    id: order.id,
                    title: `${order.name} — ${order.services.join(', ')}`,
                    start,
                    end,
                    resource: order,
                };
            });
    }, [orders]);

    const handleEventDrop = async ({
                                       event,
                                       start,
                                   }: {
        event: CalendarEvent;
        start: Date;
    }) => {
        const scheduledAt = start.toISOString();

        await updateOrderSchedule(event.id, scheduledAt);

        setOrders((prev) =>
            prev.map((order) =>
                order.id === event.id
                    ? {
                        ...order,
                        scheduledAt,
                        status:
                            order.status === 'NEW'
                                ? 'CONFIRMED'
                                : order.status,
                    }
                    : order
            )
        );
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        router.push('/admin');
    };

    return (
        <main className="min-h-screen bg-[#f7f4f2]">
            <div className="flex min-h-screen">
                <aside className="hidden w-[280px] border-r border-[#ead3c9] bg-white xl:block">
                    <div className="p-8">
                        <h2 className="text-[30px] font-semibold tracking-[-0.05em] text-[#2d211d]">
                            Beauty CRM
                        </h2>

                        <p className="mt-2 text-sm text-[#7b6b65]">
                            Календарь записей
                        </p>
                    </div>

                    <nav className="grid gap-2 px-4">
                        <Link
                            href="/admin/dashboard"
                            className="flex h-14 items-center gap-3 rounded-2xl px-5 text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]"
                        >
                            <ClipboardList size={18} />
                            Заявки
                        </Link>

                        <Link
                            href="/admin/calendar"
                            className="flex h-14 items-center gap-3 rounded-2xl bg-[#cf8f78] px-5 text-sm font-semibold text-white"
                        >
                            <CalendarDays size={18} />
                            Календарь
                        </Link>

                        <button className="flex h-14 items-center gap-3 rounded-2xl px-5 text-left text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]">
                            <CreditCard size={18} />
                            Финансы
                        </button>
                    </nav>
                </aside>

                <div className="flex-1 p-4 md:p-8">
                    <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div>
                            <h1 className="text-[42px] font-semibold tracking-[-0.05em] text-[#2d211d]">
                                Календарь записей
                            </h1>

                            <p className="mt-2 text-[#7b6b65]">
                                Перетаскивайте запись на другое время — CRM
                                обновится автоматически.
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#ead3c9] bg-white px-6 text-sm font-semibold text-[#2d211d]"
                        >
                            <LogOut size={17} />
                            Выйти
                        </button>
                    </div>

                    <div className="rounded-[32px] bg-white p-4 shadow-[0_18px_50px_rgba(177,132,115,0.08)] md:p-6">
                        <div className="h-[760px]">
                            <DnDCalendar
                                localizer={localizer}
                                events={events}
                                date={date}
                                view={view}
                                views={['day', 'week', 'month']}
                                startAccessor="start"
                                endAccessor="end"
                                step={60}
                                timeslots={1}
                                min={new Date(2026, 1, 1, 9, 0)}
                                max={new Date(2026, 1, 1, 19, 0)}
                                messages={{
                                    today: 'Сегодня',
                                    previous: 'Назад',
                                    next: 'Вперёд',
                                    month: 'Месяц',
                                    week: 'Неделя',
                                    day: 'День',
                                    agenda: 'Список',
                                    date: 'Дата',
                                    time: 'Время',
                                    event: 'Запись',
                                    noEventsInRange: 'Записей нет',
                                }}
                                onView={(nextView) => setView(nextView)}
                                onNavigate={(nextDate) => setDate(nextDate)}
                                onEventDrop={(args) =>
                                    handleEventDrop(args as {
                                        event: CalendarEvent;
                                        start: Date;
                                    })
                                }
                                onSelectEvent={(event) =>
                                    setSelectedOrder(
                                        (event as CalendarEvent).resource
                                    )
                                }
                                draggableAccessor={() => true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">
                        <h2 className="mb-2 text-[30px] font-semibold text-[#2d211d]">
                            {selectedOrder.name}
                        </h2>

                        <p className="mb-5 text-[#7b6b65]">
                            {selectedOrder.phone}
                        </p>

                        <div className="grid gap-3 text-sm text-[#2d211d]">
                            <p>
                                <span className="font-semibold">Услуги:</span>{' '}
                                {selectedOrder.services.join(', ')}
                            </p>

                            <p>
                                <span className="font-semibold">Цена:</span>{' '}
                                {selectedOrder.price.toLocaleString('ru-RU')} ₽
                            </p>

                            <p>
                                <span className="font-semibold">Статус:</span>{' '}
                                {selectedOrder.status}
                            </p>

                            <p>
                                <span className="font-semibold">Комментарий:</span>{' '}
                                {selectedOrder.comment || '—'}
                            </p>
                        </div>

                        <button
                            onClick={() => setSelectedOrder(null)}
                            className="mt-8 h-12 w-full rounded-2xl bg-[#cf8f78] font-semibold text-white"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}