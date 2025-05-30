import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = searchParams.get('page') || '1';
        const pageSize = searchParams.get('pageSize') || '10';
        // Nuevo: soportar parámetro 'date' y convertirlo a dateFrom/dateTo
        let dateFrom = searchParams.get('dateFrom');
        let dateTo = searchParams.get('dateTo');
        const date = searchParams.get('date');
        if (date && !dateFrom && !dateTo) {
            dateFrom = date;
            // sumar un día a date para dateTo
            const d = new Date(date);
            d.setDate(d.getDate() + 1);
            dateTo = d.toISOString().slice(0, 10);
        }
        let apiUrl = `${API_BASE_URL}/api/press-release?page=${page}&pageSize=${pageSize}`;
        if (dateFrom) apiUrl += `&dateFrom=${dateFrom}`;
        if (dateTo) apiUrl += `&dateTo=${dateTo}`;
        // Pasar también el parámetro de búsqueda si existe
        const search = searchParams.get('search');
        if (search) apiUrl += `&search=${encodeURIComponent(search)}`;
        const res = await fetch(apiUrl);
        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch data" }, { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
