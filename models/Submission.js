import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const submissionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
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
      default: "MXN",
    },
    period: {
      type: String,
      trim: true,
      required: true,
      default: "mes",
    },
    people: {
      type: Number,
      trim: true,
      required: true,
    },
    rooms: {
      type: Number,
      trim: true,
      required: true,
    },
    bathrooms: {
      type: Number,
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
    images: {
      type: [String],
      required: true,
    },
    allowed: {
      type: [String], // Array of strings, e.g., ['dog', 'cat']
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
submissionSchema.plugin(toJSON);

export default mongoose.models.Submission ||
  mongoose.model("Submission", submissionSchema);
