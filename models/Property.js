import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// PROPERTY SCHEMA is used to store the property details.
const propertySchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    currency: {
      type: String,
      trim: true,
      required: true,
    },
    period: {
      type: String,
      trim: true,
      required: true,
    },
    allowed: {
      type: [String], // Array of strings, e.g., ['dog', 'cat']
      default: [],
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    adress: {
      type: String,
      trim: true,
      required: true,
    },
    owner: {
      type: String,
      trim: true,
      required: true,
    },
    ownernumber: {
      type: String,
      trim: true,
      required: true,
    },
    rooms: {
      type: String,
      trim: true,
      required: true,
    },
    bathrooms: {
      type: String,
      trim: true,
      required: true,
    },
    people: {
      type: String,
      trim: true,
      required: true,
    },
    feature: {
      type: Boolean,
      default: false,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
propertySchema.plugin(toJSON);

export default mongoose.models.Property ||
  mongoose.model("Property", propertySchema);
