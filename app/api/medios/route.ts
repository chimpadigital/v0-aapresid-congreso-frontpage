import { NextResponse } from "next/server";
import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || '';


export async function GET() {
  try {
    const [medios] = await Promise.all([
      axios.get(`${API_BASE_URL}/api/logos?categoryId=6&limit=1000`),
    ]);

    return NextResponse.json({
      medios: medios.data.data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch sponsors" }, { status: 500 });
  }
}
