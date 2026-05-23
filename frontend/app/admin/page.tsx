'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { loginAdmin } from '@/lib/api';

export default function AdminPage() {
    const router = useRouter();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            setError('');
            setIsLoading(true);

            const data = await loginAdmin(login, password);

            localStorage.setItem('admin_token', data.token);

            router.push('/admin/dashboard');
        } catch (error) {
            console.error(error);

            setError('Неверный логин или пароль');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#fff8f4] px-4">
            <div className="w-full max-w-md rounded-[32px] border border-[#ead3c9] bg-white p-8 shadow-[0_24px_80px_rgba(177,132,115,0.12)]">
                <h1 className="mb-2 text-[42px] font-semibold tracking-[-0.05em] text-[#2d211d]">
                    Admin
                </h1>

                <p className="mb-8 text-[#7b6b65]">
                    Вход в панель управления
                </p>

                <form
                    onSubmit={handleLogin}
                    className="grid gap-4"
                >
                    <input
                        type="text"
                        placeholder="Логин"
                        value={login}
                        onChange={(event) =>
                            setLogin(event.target.value)
                        }
                        className="h-14 rounded-2xl border border-[#ead3c9] px-5 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                        className="h-14 rounded-2xl border border-[#ead3c9] px-5 outline-none"
                    />

                    {error && (
                        <div className="rounded-2xl bg-red-50 px-4 py-4 text-sm text-red-500">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-2 h-14 rounded-full bg-[#cf8f78] text-[15px] font-semibold text-white transition hover:bg-[#b87965]"
                    >
                        {isLoading
                            ? 'Входим...'
                            : 'Войти'}
                    </button>
                </form>
            </div>
        </main>
    );
}