import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Property from "@/models/Property";

export const dynamic = "force-dynamic";

export async function GET() {
  await connectMongo();

  try {
    const properties = await Property.find({});
    return NextResponse.json(properties);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
