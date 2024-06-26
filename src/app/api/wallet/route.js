import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // console.log(data);
    return NextResponse.json({ data: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: "notok" });
  }
}
