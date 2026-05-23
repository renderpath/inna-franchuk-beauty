import { Router } from 'express';
import { prisma } from '../lib/prisma';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { date } = req.query;

        if (!date) {
            return res.status(400).json({
                message: 'Дата обязательна',
            });
        }

        const orders = await prisma.order.findMany({
            where: {
                scheduledAt: {
                    gte: new Date(`${date}T00:00:00`),
                    lte: new Date(`${date}T23:59:59`),
                },
            },
        });

        const busySlots = orders.map((order) =>
            new Date(order.scheduledAt!)
                .toTimeString()
                .slice(0, 5)
        );

        return res.json(busySlots);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
});

export default router;