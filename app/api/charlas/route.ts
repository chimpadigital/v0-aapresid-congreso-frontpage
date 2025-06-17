import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api-congreso.aapresid.org.ar/api/events");
    if (!res.ok) {
      return NextResponse.json({ error: "Error al obtener eventos" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error de red o inesperado" }, { status: 500 });
  }
}