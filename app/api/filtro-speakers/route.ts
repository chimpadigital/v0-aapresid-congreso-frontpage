import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/speakers?limit=1000`);
        if (!res.ok) {
            return NextResponse.json({ error: "Error fetching speakers" }, { status: res.status });
        }
        const speakers = await res.json();
        return NextResponse.json({ speakers });
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
