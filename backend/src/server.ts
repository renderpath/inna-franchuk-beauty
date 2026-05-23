import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import orderRoutes from './routes/order.routes';
import adminRoutes from './routes/admin.routes';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

const FRONTEND_URL =
    process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true,
    })
);

app.use(express.json());

app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'Backend is running',
    });
});

app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});