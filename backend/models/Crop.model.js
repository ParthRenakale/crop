import mongoose from "mongoose";

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: [
        "Wheat",
        "Alfalfa",
        "Soybean",
        "Blueberry",
        "Rapeseed",
        "Corn",
        "Rice",
        "Potato",
        "Beetroot",
      ],
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    plantingDate: {
      type: Date,
      required: true,
    },
    harvestDate: Date,
    season: {
      type: String,
      enum: ["Spring", "Summer", "Autumn", "Winter"],
      required: false,
    },
    status: {
      type: String,
      enum: ["planned", "growing", "harvested", "failed"],
      default: "planned",
    },
    area: {
      type: Number,
      // min: [0.1, "Minimum 0.1 hectare/acre"],
      required: true,
    },
    expectedYield: {
      type: Number,
      min: 0,
      required: false,
    },
    soilType: {
      type: String,
      enum: ["clay", "sandy", "loamy", "peat", "chalky"],
      required: false,
    },

    environment: {
      ph: {
        type: Number,
        min: 0,
        max: 14,
        default: null,
      },
      moisture: {
        type: Number,
        min: 0,
        max: 100,
        default: null,
      },
      temperature: {
        type: Number,
        default: null,
      },
      lastUpdated: {
        type: Date,
        default: null,
      },

    },
    progress: {
      type: [Boolean],
      default: [false, false, false, false, false, false, false],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Crop", cropSchema);
