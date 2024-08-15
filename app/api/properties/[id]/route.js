import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Property from "@/models/Property";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  await connectMongo();

  const { id } = params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(property);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
