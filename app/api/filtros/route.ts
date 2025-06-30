import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const endpoints = [
            { name: "speakers", url: `${API_BASE_URL}/api/speakers?limit=1000` },
            { name: "themes", url: `${API_BASE_URL}/api/themes` },
            { name: "rooms", url: `${API_BASE_URL}/api/rooms?limit=1000` },
            { name: "days", url: `${API_BASE_URL}/api/events/filters` },
            { name: "events", url: `${API_BASE_URL}/api/events` },
        ];
        const results = await Promise.allSettled(endpoints.map(e => fetch(e.url)));
        const data: Record<string, any> = {};
        const errors: string[] = [];
        for (let i = 0; i < results.length; i++) {
            const endpoint = endpoints[i];
            const result = results[i];
            if (result.status === "fulfilled" && result.value.ok) {
                data[endpoint.name] = await result.value.json();
            } else {
                errors.push(endpoint.name);
            }
        }
        if (errors.length > 0) {
            return NextResponse.json({ ...data, errors }, { status: 207 }); // 207: Multi-Status
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}