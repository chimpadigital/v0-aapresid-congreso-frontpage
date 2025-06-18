import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET() {
    try {
        const [speakersRes, themesRes, roomsRes, daysRes] = await Promise.all([
            fetch(`${API_BASE_URL}/api/speakers?limit=1000`),
            fetch(`${API_BASE_URL}/api/themes`),
            fetch(`${API_BASE_URL}/api/rooms?limit=1000`),
            fetch(`${API_BASE_URL}/api/events/filters`),
        ]);

        if (!speakersRes.ok || !themesRes.ok || !roomsRes.ok || !daysRes.ok) {
            return NextResponse.json({ error: "Error fetching filters" }, { status: 500 });
        }

        const [speakers, themes, rooms, days] = await Promise.all([
            speakersRes.json(),
            themesRes.json(),
            roomsRes.json(),
            daysRes.json(),
        ]);

        return NextResponse.json({
            speakers,
            themes,
            rooms,
            days,
        });
    } catch (error) {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}