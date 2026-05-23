import { Router } from 'express';

import {
    createOrder,
    deleteOrder,
    getOrders,
    updateOrderAdminComment,
    updateOrderPrice,
    updateOrderSchedule,
    updateOrderStatus,
} from '../controllers/order.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/', createOrder);

router.get('/', authMiddleware, getOrders);
router.patch('/:id/status', authMiddleware, updateOrderStatus);
router.patch('/:id/schedule', authMiddleware, updateOrderSchedule);
router.patch('/:id/price', authMiddleware, updateOrderPrice);
router.delete('/:id', authMiddleware, deleteOrder);
router.patch('/:id/admin-comment', authMiddleware, updateOrderAdminComment);

export default router;