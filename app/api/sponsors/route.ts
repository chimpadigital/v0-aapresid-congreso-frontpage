import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const [a, b, c, d] = await Promise.all([
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=1"),
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=2"),
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=3"),
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=4"),
    ]);

    return NextResponse.json({
      category1: a.data.data,
      category2: b.data.data,
      category3: c.data.data,
      category4: d.data.data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch sponsors" }, { status: 500 });
  }
}