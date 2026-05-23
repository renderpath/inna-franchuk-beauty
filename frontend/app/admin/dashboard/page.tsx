'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    CalendarDays,
    Clock3,
    CreditCard,
    Search,
    Trash2,
    User2,
    X,
} from 'lucide-react';

import {
    deleteOrder,
    getOrders,
    updateOrderPrice,
    updateOrderSchedule,
    updateOrderStatus,
} from '@/lib/api';

type Order = {
    id: number;
    name: string;
    phone: string;
    service: string;
    comment?: string;
    status: string;
    price: number;
    scheduledAt?: string | null;
    createdAt: string;
};

const statuses = [
    { value: 'ALL', label: 'Все статусы' },
    { value: 'NEW', label: 'Новая' },
    { value: 'CONFIRMED', label: 'Подтверждена' },
    { value: 'COMPLETED', label: 'Завершена' },
    { value: 'CANCELLED', label: 'Отменена' },
];

const calendarHours = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
];

export default function AdminDashboardPage() {
    const router = useRouter();

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [sortBy, setSortBy] = useState('date_desc');
    const [calendarDate, setCalendarDate] = useState(
        new Date().toISOString().split('T')[0]
    );

    const [selectedDates, setSelectedDates] = useState<Record<number, string>>(
        {}
    );
    const [deleteModal, setDeleteModal] = useState<Order | null>(null);
    const [activeOrderId, setActiveOrderId] = useState<number | null>(null);

    const loadOrders = async () => {
        try {
            const data = await getOrders();
            setOrders(data);
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

        loadOrders();
    }, [router]);

    const totalRevenue = orders.reduce(
        (sum, order) => sum + Number(order.price || 0),
        0
    );

    const filteredOrders = useMemo(() => {
        let result = [...orders];

        if (statusFilter !== 'ALL') {
            result = result.filter((order) => order.status === statusFilter);
        }

        if (search.trim()) {
            const value = search.toLowerCase();

            result = result.filter(
                (order) =>
                    order.name.toLowerCase().includes(value) ||
                    order.phone.includes(value) ||
                    order.service.toLowerCase().includes(value)
            );
        }

        switch (sortBy) {
            case 'date_asc':
                result.sort(
                    (a, b) =>
                        new Date(a.createdAt).getTime() -
                        new Date(b.createdAt).getTime()
                );
                break;

            case 'name_asc':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;

            case 'phone_asc':
                result.sort((a, b) => a.phone.localeCompare(b.phone));
                break;

            case 'status':
                result.sort((a, b) => a.status.localeCompare(b.status));
                break;

            case 'price_desc':
                result.sort(
                    (a, b) => Number(b.price || 0) - Number(a.price || 0)
                );
                break;

            default:
                result.sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                );
        }

        return result;
    }, [orders, search, statusFilter, sortBy]);

    const getStatusLabel = (status: string) =>
        statuses.find((item) => item.value === status)?.label || status;

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'NEW':
                return 'bg-blue-100 text-blue-700';

            case 'CONFIRMED':
                return 'bg-yellow-100 text-yellow-700';

            case 'COMPLETED':
                return 'bg-green-100 text-green-700';

            case 'CANCELLED':
                return 'bg-red-100 text-red-700';

            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const handleStatusChange = async (id: number, status: string) => {
        await updateOrderStatus(id, status);

        setOrders((prev) =>
            prev.map((order) =>
                order.id === id
                    ? {
                        ...order,
                        status,
                    }
                    : order
            )
        );
    };

    const handleSchedule = async (id: number, date: string, time: string) => {
        if (!date || !time) return;

        const scheduledAt = `${date}T${time}:00`;

        await updateOrderSchedule(id, scheduledAt);

        setOrders((prev) =>
            prev.map((order) =>
                order.id === id
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

    const handlePriceChange = async (id: number, price: number) => {
        await updateOrderPrice(id, price);

        setOrders((prev) =>
            prev.map((order) =>
                order.id === id
                    ? {
                        ...order,
                        price,
                    }
                    : order
            )
        );
    };

    const handleDelete = async () => {
        if (!deleteModal) return;

        await deleteOrder(deleteModal.id);

        setOrders((prev) =>
            prev.filter((order) => order.id !== deleteModal.id)
        );

        setDeleteModal(null);
    };

    const scrollToOrder = (id: number) => {
        setActiveOrderId(id);

        const element = document.getElementById(`order-${id}`);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }

        setTimeout(() => {
            setActiveOrderId(null);
        }, 2500);
    };

    const getOrdersByDate = (date: string) => {
        return orders.filter((order) => {
            if (!order.scheduledAt) return false;

            return order.scheduledAt.split('T')[0] === date;
        });
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
                            Панель администратора
                        </p>
                    </div>

                    <nav className="grid gap-2 px-4">
                        <button className="flex h-14 items-center rounded-2xl bg-[#cf8f78] px-5 text-left text-sm font-semibold text-white">
                            Заявки
                        </button>

                        <button className="flex h-14 items-center rounded-2xl px-5 text-left text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]">
                            Календарь
                        </button>

                        <button className="flex h-14 items-center rounded-2xl px-5 text-left text-sm font-semibold text-[#2d211d] transition hover:bg-[#fff8f4]">
                            Финансы
                        </button>
                    </nav>
                </aside>

                <div className="flex-1 p-4 md:p-8">
                    <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div>
                            <h1 className="text-[42px] font-semibold tracking-[-0.05em] text-[#2d211d]">
                                CRM Dashboard
                            </h1>

                            <p className="mt-2 text-[#7b6b65]">
                                Заявки, записи, календарь и финансы
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                localStorage.removeItem('admin_token');
                                router.push('/admin');
                            }}
                            className="h-12 rounded-full border border-[#ead3c9] bg-white px-6 text-sm font-semibold text-[#2d211d]"
                        >
                            Выйти
                        </button>
                    </div>

                    <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                            <p className="text-sm text-[#7b6b65]">
                                Всего заявок
                            </p>

                            <h2 className="mt-3 text-[42px] font-semibold text-[#2d211d]">
                                {orders.length}
                            </h2>
                        </div>

                        <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                            <p className="text-sm text-[#7b6b65]">Записаны</p>

                            <h2 className="mt-3 text-[42px] font-semibold text-yellow-600">
                                {
                                    orders.filter((order) => order.scheduledAt)
                                        .length
                                }
                            </h2>
                        </div>

                        <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                            <p className="text-sm text-[#7b6b65]">Завершены</p>

                            <h2 className="mt-3 text-[42px] font-semibold text-green-600">
                                {
                                    orders.filter(
                                        (order) => order.status === 'COMPLETED'
                                    ).length
                                }
                            </h2>
                        </div>

                        <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(177,132,115,0.08)]">
                            <p className="text-sm text-[#7b6b65]">Выручка</p>

                            <h2 className="mt-3 text-[42px] font-semibold text-[#cf8f78]">
                                {totalRevenue.toLocaleString('ru-RU')} ₽
                            </h2>
                        </div>
                    </div>

                    <div className="mb-8 rounded-[32px] bg-white p-6 shadow-[0_18px_50px_rgba(177,132,115,0.08)]">
                        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <div className="mb-2 flex items-center gap-3">
                                    <CalendarDays
                                        size={22}
                                        className="text-[#cf8f78]"
                                    />

                                    <h2 className="text-[24px] font-semibold text-[#2d211d]">
                                        Календарь занятости
                                    </h2>
                                </div>

                                <p className="text-sm text-[#7b6b65]">
                                    Занятость по дням и часам. Нажмите на
                                    клиента, чтобы перейти к заявке.
                                </p>
                            </div>

                            <input
                                type="date"
                                value={calendarDate}
                                onChange={(event) =>
                                    setCalendarDate(event.target.value)
                                }
                                className="h-12 rounded-2xl border border-[#ead3c9] px-4 outline-none"
                            />
                        </div>

                        <div className="mb-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
                            {Array.from({ length: 7 }).map((_, index) => {
                                const date = new Date(calendarDate);

                                date.setDate(date.getDate() + index);

                                const formattedDate = date
                                    .toISOString()
                                    .split('T')[0];

                                const dayOrders = getOrdersByDate(
                                    formattedDate
                                );

                                return (
                                    <button
                                        key={formattedDate}
                                        type="button"
                                        onClick={() =>
                                            setCalendarDate(formattedDate)
                                        }
                                        className={[
                                            'rounded-2xl border p-4 text-left transition',
                                            formattedDate === calendarDate
                                                ? 'border-[#cf8f78] bg-[#fff3ed]'
                                                : 'border-[#ead3c9] bg-white hover:bg-[#fff8f4]',
                                        ].join(' ')}
                                    >
                                        <p className="text-sm text-[#7b6b65]">
                                            {date.toLocaleDateString('ru-RU', {
                                                weekday: 'short',
                                            })}
                                        </p>

                                        <h3 className="mt-2 text-[24px] font-semibold text-[#2d211d]">
                                            {date.getDate()}
                                        </h3>

                                        <div
                                            className={[
                                                'mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold',
                                                dayOrders.length === 0
                                                    ? 'bg-[#f4f1ef] text-[#7b6b65]'
                                                    : '',
                                                dayOrders.length === 1
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : '',
                                                dayOrders.length >= 2
                                                    ? 'bg-red-100 text-red-700'
                                                    : '',
                                            ].join(' ')}
                                        >
                                            {dayOrders.length} клиентов
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                            {calendarHours.map((hour) => {
                                const hourOrders = orders.filter((order) => {
                                    if (!order.scheduledAt) return false;

                                    const orderDate =
                                        order.scheduledAt.split('T')[0];

                                    const orderHour = new Date(
                                        order.scheduledAt
                                    )
                                        .toTimeString()
                                        .slice(0, 5);

                                    return (
                                        orderDate === calendarDate &&
                                        orderHour === hour
                                    );
                                });

                                return (
                                    <div
                                        key={hour}
                                        className={[
                                            'rounded-2xl p-4 transition',
                                            hourOrders.length === 0
                                                ? 'bg-[#f8f5f3]'
                                                : '',
                                            hourOrders.length === 1
                                                ? 'bg-yellow-100'
                                                : '',
                                            hourOrders.length >= 2
                                                ? 'bg-red-100'
                                                : '',
                                        ].join(' ')}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-[#2d211d]">
                                                {hour}
                                            </h3>

                                            <div className="text-xs font-semibold text-[#7b6b65]">
                                                {hourOrders.length}
                                            </div>
                                        </div>

                                        <div className="mt-4 grid gap-2">
                                            {hourOrders.length === 0 ? (
                                                <p className="text-xs text-[#7b6b65]">
                                                    Свободно
                                                </p>
                                            ) : (
                                                hourOrders.map((order) => (
                                                    <button
                                                        key={order.id}
                                                        type="button"
                                                        onClick={() =>
                                                            scrollToOrder(
                                                                order.id
                                                            )
                                                        }
                                                        className="rounded-xl bg-white/80 p-2 text-left text-xs transition hover:bg-white hover:shadow-md"
                                                    >
                                                        <p className="font-semibold text-[#2d211d]">
                                                            {order.name}
                                                        </p>

                                                        <p className="text-[#7b6b65]">
                                                            {order.service}
                                                        </p>
                                                    </button>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mb-8 grid gap-4 rounded-[32px] bg-white p-5 shadow-[0_18px_50px_rgba(177,132,115,0.08)] xl:grid-cols-[1fr_220px_220px]">
                        <label className="flex h-14 items-center gap-3 rounded-2xl border border-[#ead3c9] px-5">
                            <Search size={18} className="text-[#c58e7b]" />

                            <input
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Поиск по имени, телефону или услуге"
                                className="w-full bg-transparent outline-none"
                            />
                        </label>

                        <select
                            value={statusFilter}
                            onChange={(event) =>
                                setStatusFilter(event.target.value)
                            }
                            className="h-14 rounded-2xl border border-[#ead3c9] px-5 outline-none"
                        >
                            {statuses.map((status) => (
                                <option key={status.value} value={status.value}>
                                    {status.label}
                                </option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                            className="h-14 rounded-2xl border border-[#ead3c9] px-5 outline-none"
                        >
                            <option value="date_desc">Сначала новые</option>
                            <option value="date_asc">Сначала старые</option>
                            <option value="name_asc">По имени</option>
                            <option value="phone_asc">По номеру</option>
                            <option value="status">По статусу</option>
                            <option value="price_desc">По цене</option>
                        </select>
                    </div>

                    {isLoading ? (
                        <div className="rounded-[32px] bg-white p-10">
                            Загрузка...
                        </div>
                    ) : (
                        <div className="grid gap-5">
                            {filteredOrders.map((order) => (
                                <div
                                    id={`order-${order.id}`}
                                    key={order.id}
                                    className={[
                                        'rounded-[32px] bg-white p-6 shadow-[0_18px_50px_rgba(177,132,115,0.08)] transition-all duration-500',
                                        activeOrderId === order.id
                                            ? 'ring-2 ring-[#cf8f78] shadow-[0_20px_80px_rgba(207,143,120,0.35)]'
                                            : '',
                                    ].join(' ')}
                                >
                                    <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                                        <div className="grid gap-5">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1eb]">
                                                    <User2
                                                        size={20}
                                                        className="text-[#c58e7b]"
                                                    />
                                                </div>

                                                <div>
                                                    <h2 className="text-[24px] font-semibold text-[#2d211d]">
                                                        {order.name}
                                                    </h2>

                                                    <p className="text-sm text-[#7b6b65]">
                                                        {order.phone}
                                                    </p>
                                                </div>

                                                <div
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                                                        order.status
                                                    )}`}
                                                >
                                                    {getStatusLabel(
                                                        order.status
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid gap-2 text-sm text-[#2d211d]">
                                                <p>
                                                    <span className="font-semibold">
                                                        Услуга:
                                                    </span>{' '}
                                                    {order.service}
                                                </p>

                                                <p>
                                                    <span className="font-semibold">
                                                        Комментарий:
                                                    </span>{' '}
                                                    {order.comment || '—'}
                                                </p>

                                                <p>
                                                    <span className="font-semibold">
                                                        Цена:
                                                    </span>{' '}
                                                    {Number(
                                                        order.price || 0
                                                    ).toLocaleString(
                                                        'ru-RU'
                                                    )}{' '}
                                                    ₽
                                                </p>

                                                <p>
                                                    <span className="font-semibold">
                                                        Дата заявки:
                                                    </span>{' '}
                                                    {new Date(
                                                        order.createdAt
                                                    ).toLocaleString('ru-RU')}
                                                </p>

                                                {order.scheduledAt && (
                                                    <p className="flex items-center gap-2 font-semibold text-green-700">
                                                        <Clock3 size={16} />
                                                        Запись:{' '}
                                                        {new Date(
                                                            order.scheduledAt
                                                        ).toLocaleString(
                                                            'ru-RU'
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid gap-4 xl:min-w-[380px]">
                                            <select
                                                value={order.status}
                                                onChange={(event) =>
                                                    handleStatusChange(
                                                        order.id,
                                                        event.target.value
                                                    )
                                                }
                                                className="h-12 rounded-2xl border border-[#ead3c9] px-4 outline-none"
                                            >
                                                {statuses
                                                    .filter(
                                                        (status) =>
                                                            status.value !==
                                                            'ALL'
                                                    )
                                                    .map((status) => (
                                                        <option
                                                            key={status.value}
                                                            value={
                                                                status.value
                                                            }
                                                        >
                                                            {status.label}
                                                        </option>
                                                    ))}
                                            </select>

                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    type="date"
                                                    value={
                                                        selectedDates[
                                                            order.id
                                                            ] ||
                                                        order.scheduledAt?.split(
                                                            'T'
                                                        )[0] ||
                                                        ''
                                                    }
                                                    onChange={(event) =>
                                                        setSelectedDates(
                                                            (prev) => ({
                                                                ...prev,
                                                                [order.id]:
                                                                event
                                                                    .target
                                                                    .value,
                                                            })
                                                        )
                                                    }
                                                    className="h-12 rounded-2xl border border-[#ead3c9] px-4 outline-none"
                                                />

                                                <select
                                                    value={
                                                        order.scheduledAt
                                                            ? new Date(
                                                                order.scheduledAt
                                                            )
                                                                .toTimeString()
                                                                .slice(0, 5)
                                                            : ''
                                                    }
                                                    onChange={(event) =>
                                                        handleSchedule(
                                                            order.id,
                                                            selectedDates[
                                                                order.id
                                                                ] ||
                                                            order.scheduledAt?.split(
                                                                'T'
                                                            )[0] ||
                                                            new Date()
                                                                .toISOString()
                                                                .split(
                                                                    'T'
                                                                )[0],
                                                            event.target.value
                                                        )
                                                    }
                                                    className="h-12 rounded-2xl border border-[#ead3c9] px-4 outline-none"
                                                >
                                                    <option value="">
                                                        Время
                                                    </option>

                                                    {calendarHours.map(
                                                        (hour) => (
                                                            <option
                                                                key={hour}
                                                                value={hour}
                                                            >
                                                                {hour}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>

                                            <label className="flex h-12 items-center gap-3 rounded-2xl border border-[#ead3c9] px-4">
                                                <CreditCard
                                                    size={18}
                                                    className="text-[#cf8f78]"
                                                />

                                                <input
                                                    type="number"
                                                    min={0}
                                                    defaultValue={
                                                        order.price || 0
                                                    }
                                                    onBlur={(event) =>
                                                        handlePriceChange(
                                                            order.id,
                                                            Number(
                                                                event.target
                                                                    .value
                                                            )
                                                        )
                                                    }
                                                    placeholder="Цена"
                                                    className="w-full bg-transparent outline-none"
                                                />

                                                <span className="text-sm text-[#7b6b65]">
                                                    ₽
                                                </span>
                                            </label>

                                            <button
                                                onClick={() =>
                                                    setDeleteModal(order)
                                                }
                                                className="flex h-12 items-center justify-center gap-3 rounded-2xl bg-red-50 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                                            >
                                                <Trash2 size={18} />
                                                Удалить заявку
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {filteredOrders.length === 0 && (
                                <div className="rounded-[32px] bg-white p-10 text-center text-[#7b6b65]">
                                    Заявки не найдены
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {deleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-[28px] font-semibold text-[#2d211d]">
                                Удалить заявку?
                            </h2>

                            <button
                                onClick={() => setDeleteModal(null)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff8f4]"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <p className="mb-8 leading-7 text-[#7b6b65]">
                            Вы действительно хотите удалить заявку клиента{' '}
                            <span className="font-semibold text-[#2d211d]">
                                {deleteModal.name}
                            </span>
                            ?
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setDeleteModal(null)}
                                className="h-12 rounded-2xl border border-[#ead3c9] font-semibold text-[#2d211d]"
                            >
                                Отмена
                            </button>

                            <button
                                onClick={handleDelete}
                                className="h-12 rounded-2xl bg-red-500 font-semibold text-white"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}