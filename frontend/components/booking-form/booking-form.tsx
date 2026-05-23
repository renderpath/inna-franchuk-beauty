'use client';

import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { SERVICES } from '@/lib/constants/services';
import { createOrder, getBusySlots } from '@/lib/api';

const schema = z.object({
    name: z.string().min(2, 'Введите имя'),
    phone: z.string().min(18, 'Введите телефон'),
    services: z.array(z.string()).min(1, 'Выберите хотя бы одну услугу'),
    date: z.string().min(1, 'Выберите дату'),
    time: z.string().min(1, 'Выберите время'),
    comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;
type ServiceItem = (typeof SERVICES)[number];

const hours = [
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
];

const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    const normalized = digits.startsWith('7') ? digits : `7${digits}`;

    const part1 = normalized.slice(1, 4);
    const part2 = normalized.slice(4, 7);
    const part3 = normalized.slice(7, 9);
    const part4 = normalized.slice(9, 11);

    let result = '+7';

    if (part1) result += ` (${part1}`;
    if (part1.length === 3) result += ')';
    if (part2) result += ` ${part2}`;
    if (part3) result += `-${part3}`;
    if (part4) result += `-${part4}`;

    return result;
};

export function BookingForm() {
    const [busySlots, setBusySlots] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        watch,
        setValue,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            services: [],
            date: '',
            time: '',
            comment: '',
        },
    });

    const phoneRegister = register('phone');
    const selectedServices = watch('services') || [];
    const selectedDate = watch('date');

    useEffect(() => {
        if (!selectedDate) {
            setBusySlots([]);
            return;
        }

        const loadSlots = async () => {
            try {
                const data = await getBusySlots(selectedDate);
                setBusySlots(data);
            } catch (error) {
                console.error(error);
            }
        };

        void loadSlots();

        const interval = window.setInterval(() => {
            void loadSlots();
        }, 10000);

        return () => window.clearInterval(interval);
    }, [selectedDate]);

    const totalPrice = useMemo(() => {
        return SERVICES.filter((service: ServiceItem) =>
            selectedServices.includes(service.title)
        ).reduce(
            (sum: number, service: ServiceItem) => sum + service.price,
            0
        );
    }, [selectedServices]);

    const toggleService = (serviceTitle: string) => {
        setSuccessMessage('');
        setErrorMessage('');

        if (selectedServices.includes(serviceTitle)) {
            setValue(
                'services',
                selectedServices.filter((item) => item !== serviceTitle),
                { shouldValidate: true }
            );

            return;
        }

        setValue('services', [...selectedServices, serviceTitle], {
            shouldValidate: true,
        });
    };

    const onSubmit = async (data: FormData) => {
        try {
            setIsSubmitting(true);
            setSuccessMessage('');
            setErrorMessage('');

            const scheduledAt = `${data.date}T${data.time}:00`;

            await createOrder({
                name: data.name,
                phone: data.phone,
                services: data.services,
                comment: data.comment,
                price: totalPrice,
                scheduledAt,
            });

            setSuccessMessage('success');
            reset();
            setBusySlots([]);
        } catch (error) {
            console.error(error);
            setErrorMessage('Не удалось отправить заявку. Попробуйте позже.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                void handleSubmit(onSubmit)(event);
            }}
            className="grid gap-6"
        >
            {errorMessage && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-600">
                    {errorMessage}
                </div>
            )}

            <div>
                <input
                    {...register('name')}
                    placeholder="Ваше имя"
                    className="h-14 w-full rounded-2xl border border-[#ead3c9] px-5 outline-none transition focus:border-[#cf8f78]"
                />

                {errors.name && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    name={phoneRegister.name}
                    ref={phoneRegister.ref}
                    onBlur={phoneRegister.onBlur}
                    onChange={(event) => {
                        event.target.value = formatPhone(event.target.value);
                        phoneRegister.onChange(event);
                    }}
                    className="h-14 w-full rounded-2xl border border-[#ead3c9] px-5 outline-none transition focus:border-[#cf8f78]"
                />

                {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            <div>
                <h3 className="mb-4 text-lg font-semibold text-[#2d211d]">
                    Выберите услуги
                </h3>

                <div className="grid gap-3">
                    {SERVICES.map((service: ServiceItem) => {
                        const active = selectedServices.includes(service.title);

                        return (
                            <button
                                key={service.id}
                                type="button"
                                onClick={() => toggleService(service.title)}
                                className={[
                                    'rounded-2xl border p-5 text-left transition',
                                    active
                                        ? 'border-[#cf8f78] bg-[#fff3ed]'
                                        : 'border-[#ead3c9] bg-white hover:bg-[#fff8f4]',
                                ].join(' ')}
                            >
                                <div className="flex items-center justify-between gap-5">
                                    <div>
                                        <h4 className="font-semibold text-[#2d211d]">
                                            {service.title}
                                        </h4>

                                        <p className="mt-1 text-sm text-[#7b6b65]">
                                            {service.duration} мин
                                        </p>
                                    </div>

                                    <div className="text-lg font-semibold text-[#cf8f78]">
                                        {service.price.toLocaleString('ru-RU')} ₽
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {errors.services && (
                    <p className="mt-3 text-sm text-red-500">
                        {errors.services.message}
                    </p>
                )}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <input
                        type="date"
                        {...register('date')}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(event) => {
                            setSuccessMessage('');
                            setErrorMessage('');
                            setValue('date', event.target.value, {
                                shouldValidate: true,
                            });
                            setValue('time', '', {
                                shouldValidate: true,
                            });
                        }}
                        className="h-14 w-full rounded-2xl border border-[#ead3c9] px-5 outline-none transition focus:border-[#cf8f78]"
                    />

                    {errors.date && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.date.message}
                        </p>
                    )}
                </div>

                <div>
                    <select
                        {...register('time')}
                        onChange={(event) => {
                            setSuccessMessage('');
                            setErrorMessage('');
                            setValue('time', event.target.value, {
                                shouldValidate: true,
                            });
                        }}
                        className="h-14 w-full rounded-2xl border border-[#ead3c9] px-5 outline-none transition focus:border-[#cf8f78]"
                    >
                        <option value="">Выберите время</option>

                        {hours.map((hour) => {
                            const busy = busySlots.includes(hour);

                            return (
                                <option key={hour} value={hour} disabled={busy}>
                                    {busy ? `${hour} — занято` : hour}
                                </option>
                            );
                        })}
                    </select>

                    {errors.time && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.time.message}
                        </p>
                    )}
                </div>
            </div>

            <textarea
                {...register('comment')}
                placeholder="Комментарий"
                className="min-h-[140px] rounded-2xl border border-[#ead3c9] p-5 outline-none transition focus:border-[#cf8f78]"
            />

            <div className="rounded-[32px] bg-[#fff3ed] p-6">
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <p className="text-sm text-[#7b6b65]">
                            Итоговая стоимость
                        </p>

                        <h3 className="mt-2 text-[32px] font-semibold text-[#2d211d]">
                            {totalPrice.toLocaleString('ru-RU')} ₽
                        </h3>
                    </div>

                    <div className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#cf8f78]">
                        {selectedServices.length} услуг
                    </div>
                </div>
            </div>

            {successMessage && (
                <div className="rounded-[28px] border border-green-200 bg-green-50 p-5">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-green-600 shadow-sm">
                            <CheckCircle2 size={24} />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#2d211d]">
                                Заявка успешно отправлена
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-[#5d6b5f]">
                                Ваша запись создана. Мастер свяжется с вами для
                                подтверждения времени.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 rounded-full bg-[#cf8f78] text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
                {isSubmitting ? 'Отправка...' : 'Записаться'}
            </button>
        </form>
    );
}