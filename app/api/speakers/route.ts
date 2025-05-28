import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/speakers?page=1&limit=8`);
        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch data" }, { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
