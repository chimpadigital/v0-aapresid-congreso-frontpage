import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL || '';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    // Obtener el id dinámico de la query (?id=2)
    const id = url.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id param' }, { status: 400 });
    }
    const apiUrl = `${API_BASE_URL}/api/press-release/${id}`;
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
