import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// REGISTRATION SCHEMA is used to store the registration details.
const registrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    image: {
      type: [String],
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
