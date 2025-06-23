import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/rooms?limit=1000`);
        if (!res.ok) {
            return NextResponse.json({ error: "Error fetching rooms" }, { status: res.status });
        }
        const rooms = await res.json();
        return NextResponse.json({ rooms });
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
