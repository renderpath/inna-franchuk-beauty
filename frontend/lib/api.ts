const API_URL = 'http://localhost:5001/api';

export async function loginAdmin(login: string, password: string) {
    const response = await fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error('Ошибка авторизации');
    }

    return response.json();
}

export async function getOrders() {
    const token = localStorage.getItem('admin_token');

    const response = await fetch(`${API_URL}/orders`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Ошибка получения заявок');
    }

    return response.json();
}

export async function updateOrderStatus(id: number, status: string) {
    const token = localStorage.getItem('admin_token');

    const response = await fetch(`${API_URL}/orders/${id}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            status,
        }),
    });

    if (!response.ok) {
        throw new Error('Ошибка обновления статуса');
    }

    return response.json();
}

export async function updateOrderSchedule(
    id: number,
    scheduledAt: string | null
) {
    const token = localStorage.getItem('admin_token');

    const response = await fetch(`${API_URL}/orders/${id}/schedule`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            scheduledAt,
        }),
    });

    if (!response.ok) {
        throw new Error('Ошибка записи в календарь');
    }

    return response.json();
}

export async function deleteOrder(id: number) {
    const token = localStorage.getItem('admin_token');

    const response = await fetch(`${API_URL}/orders/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Ошибка удаления заявки');
    }

    return response.json();
}

export async function updateOrderPrice(id: number, price: number) {
    const token = localStorage.getItem('admin_token');

    const response = await fetch(`${API_URL}/orders/${id}/price`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ price }),
    });

    if (!response.ok) {
        throw new Error('Ошибка обновления цены');
    }

    return response.json();
}