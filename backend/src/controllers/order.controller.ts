import { Request, Response } from 'express';

import { prisma } from '../lib/prisma';

const allowedStatuses = ['NEW', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { name, phone, service, comment, scheduledAt } = req.body;

        if (!name || !phone || !service) {
            return res.status(400).json({
                message: 'Заполните обязательные поля',
            });
        }

        const order = await prisma.order.create({
            data: {
                name,
                phone,
                service,
                comment,
                scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
            },
        });

        return res.status(201).json(order);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};

export const getOrders = async (_req: Request, res: Response) => {
    try {
        const orders = await prisma.order.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return res.json(orders);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: 'Некорректный статус',
            });
        }

        const order = await prisma.order.update({
            where: {
                id: Number(id),
            },
            data: {
                status,
            },
        });

        return res.json(order);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};

export const updateOrderSchedule = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { scheduledAt } = req.body;

        const order = await prisma.order.update({
            where: {
                id: Number(id),
            },
            data: {
                scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
            },
        });

        return res.json(order);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.order.delete({
            where: {
                id: Number(id),
            },
        });

        return res.json({
            message: 'Заявка удалена',
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};

export const updateOrderPrice = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { price } = req.body;

        const order = await prisma.order.update({
            where: { id: Number(id) },
            data: { price: Number(price) || 0 },
        });

        return res.json(order);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};