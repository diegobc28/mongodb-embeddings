import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Registration from "@/models/Registration";

export async function POST(req) {
  await connectMongo();

  const {
    nombre,
    telefono,
    fechaEntrada,
    personas,
    perros,
    gatos,
    raza,
    mensaje,
    propertyId,
    owner,
  } = await req.json();

  try {
    const newRegistration = await Registration.create({
      nombre,
      telefono,
      fechaEntrada,
      personas,
      perros,
      gatos,
      raza,
      mensaje,
      propertyId,
      owner, // Guardar el nombre del propietario
    });

    return NextResponse.json(newRegistration);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
