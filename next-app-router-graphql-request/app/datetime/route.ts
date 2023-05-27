import { NextResponse } from "next/server";

export async function GET() {
  const datetime = new Date().toISOString();

  return NextResponse.json({ data: { datetime } });
}
