import { NextResponse } from "next/server";
import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;


export async function GET() {
  try {
    const [a, b, c, d, institucion, medios] = await Promise.all([
      axios.get(`${API_BASE_URL}/api/logos?categoryId=1`),
      axios.get(`${API_BASE_URL}/api/logos?categoryId=2`),
      axios.get(`${API_BASE_URL}/api/logos?categoryId=3`),
      axios.get(`${API_BASE_URL}/api/logos?categoryId=4`),
      axios.get(`${API_BASE_URL}/api/logos?categoryId=5`),
      axios.get(`${API_BASE_URL}/api/logos?categoryId=6`),
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
