import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/themes`);
        if (!res.ok) {
            return NextResponse.json({ error: "Error fetching themes" }, { status: res.status });
        }
        const themes = await res.json();
        return NextResponse.json({ themes });
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
