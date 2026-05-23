import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

const workingSlots = [
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
];

router.get('/services', async (req, res) => {
    const services = await prisma.service.findMany({
        orderBy: { id: 'asc' },
    });

    res.json(services);
});

router.get('/slots', async (req, res) => {
    const { date } = req.query;

    if (!date || typeof date !== 'string') {
        return res.status(400).json({ message: 'Дата обязательна' });
    }

    const orders = await prisma.order.findMany({
        where: {
            date,
            status: {
                not: 'cancelled',
            },
        },
        select: {
            time: true,
        },
    });

    const busySlots = orders.map((order) => order.time);

    const freeSlots = workingSlots.filter(
        (slot) => !busySlots.includes(slot)
    );

    res.json(freeSlots);
});

router.post('/orders', async (req, res) => {
    const {
        name,
        phone,
        services,
        totalPrice,
        date,
        time,
    } = req.body;

    if (!name || !phone || !services?.length || !date || !time) {
        return res.status(400).json({
            message: 'Заполните все обязательные поля',
        });
    }

    const existingOrder = await prisma.order.findFirst({
        where: {
            date,
            time,
            status: {
                not: 'cancelled',
            },
        },
    });

    if (existingOrder) {
        return res.status(409).json({
            message: 'Это время уже занято. Выберите другой слот.',
        });
    }

    const order = await prisma.order.create({
        data: {
            name,
            phone,
            services: services.join(', '),
            totalPrice,
            date,
            time,
        },
    });

    res.status(201).json(order);
});

export default router;