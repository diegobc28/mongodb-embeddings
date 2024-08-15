import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Submission from "@/models/Submission";

//this route saves a submission
export async function POST(req) {
  await connectMongo(); //conecta a mongodb

  const body = await req.json();

  const {
    title,
    description,
    location,
    price,
    people,
    rooms,
    bathrooms,
    owner,
    ownernumber,
    images,
    dogs,
    cats,
  } = body;

  if ((!title || !description || !location || !price || !people, !images)) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const dataToSave = {
      title,
      description,
      location,
      price,
      people,
      rooms,
      bathrooms,
      owner,
      ownernumber,
      images,
      allowed: [...(dogs ? ["dog"] : []), ...(cats ? ["cat"] : [])],
    };
    //creates a new submission
    await Submission.create(dataToSave);

    return NextResponse.json({ message: "Submission created" });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json(
      { error: "Error creating submission" },
      { status: 500 }
    );
  }
}
