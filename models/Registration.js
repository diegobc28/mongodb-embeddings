import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// REGISTRATION SCHEMA is used to store the registration details.
const registrationSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    fechaEntrada: {
      type: Date,
      required: true,
    },
    personas: {
      type: Number,
      required: true,
    },
    perros: {
      type: Number,
      required: true,
    },
    gatos: {
      type: Number,
      required: true,
    },
    raza: {
      type: String,
      trim: true,
    },
    mensaje: {
      type: String,
      trim: true,
    },
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
registrationSchema.plugin(toJSON);

const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);
export default Registration;
