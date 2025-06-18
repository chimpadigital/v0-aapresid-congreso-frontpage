import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Construir la URL de la API externa con los mismos search params
  const apiUrl = new URL("https://api-congreso.aapresid.org.ar/api/events");
  searchParams.forEach((value, key) => {
    apiUrl.searchParams.append(key, value);
  });

  try {
    const res = await fetch(apiUrl.toString());
    if (!res.ok) {
      return NextResponse.json({ error: "Error fetching charlas" }, { status: 500 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}