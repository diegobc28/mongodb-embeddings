import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import AISearch from "@/models/aisearch";
import Property from "@/models/Submission";

// This route saves a buildspace submission
export async function POST(req) {
  await connectMongo(); // Connect to MongoDB

  const body = await req.json();

  const { name, email, image } = body;

  if (!name || !email || !image) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const dataToSave = {
      name,
      email,
      image,
    };

    // Create a new buildspace submission
    await AISearch.create(dataToSave);

    return NextResponse.json({ message: "BuildSpace submission created" });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json(
      { error: "Error creating buildspace submission" },
      { status: 500 }
    );
  }
}

// This route gets 3 random properties
export async function GET() {
  await connectMongo(); // Connect to MongoDB

  try {
    const properties = await Property.aggregate([{ $sample: { size: 3 } }]);
    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error getting random properties:", error);
    return NextResponse.json(
      { error: "Error getting random properties" },
      { status: 500 }
    );
  }
}
