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
        const responses = await Promise.all(endpoints.map(e => fetch(e.url)));
        const failed = responses.findIndex((res) => !res.ok);
        if (failed !== -1) {
            return NextResponse.json({ error: `Error fetching ${endpoints[failed].name}` }, { status: 500 });
        }
        const [speakers, themes, rooms, days, events] = await Promise.all(responses.map(res => res.json()));
        return NextResponse.json({
            speakers,
            themes,
            rooms,
            days,
            events
        });
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}