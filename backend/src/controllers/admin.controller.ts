import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginAdmin = async (
    req: Request,
    res: Response
) => {
    try {
        const { login, password } = req.body;

        const adminLogin = process.env.ADMIN_LOGIN;
        const adminPassword = process.env.ADMIN_PASSWORD;
        const jwtSecret = process.env.JWT_SECRET as string;

        if (
            login !== adminLogin ||
            password !== adminPassword
        ) {
            return res.status(401).json({
                message: 'Неверный логин или пароль',
            });
        }

        const token = jwt.sign(
            {
                role: 'admin',
            },
            jwtSecret,
            {
                expiresIn: '7d',
            }
        );

        return res.json({
            token,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Ошибка сервера',
        });
    }
};