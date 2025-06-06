import { NextResponse } from "next/server";
import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || '';


export async function GET() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/categories`);
    return NextResponse.json(res.data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch sponsors" }, { status: 500 });
  }
}
