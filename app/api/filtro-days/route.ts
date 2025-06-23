import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/events/filters`);
        if (!res.ok) {
            return NextResponse.json({ error: "Error fetching days" }, { status: res.status });
        }
        const days = await res.json();
        return NextResponse.json({ days });
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
