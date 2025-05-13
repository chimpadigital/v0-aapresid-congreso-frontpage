import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const [a, b, c, d, institucion, medios] = await Promise.all([
      axios.get("https://api-congreso.aapresid.org.ar/api/logos?categoryId=8"),
      axios.get("https://api-congreso.aapresid.org.ar/api/logos?categoryId=2"),
      axios.get("https://api-congreso.aapresid.org.ar/api/logos?categoryId=3"),
      axios.get("https://api-congreso.aapresid.org.ar/api/logos?categoryId=4"),
      axios.get("https://api-congreso.aapresid.org.ar/api/logos?categoryId=5"),
      axios.get("https://api-congreso.aapresid.org.ar/api/logos?categoryId=6"),
    ]);

    return NextResponse.json({
      category1: a.data.data,
      category2: b.data.data,
      category3: c.data.data,
      category4: d.data.data,
      institucion: institucion.data.data,
      medios: medios.data.data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch sponsors" }, { status: 500 });
  }
}