import Crop from "../models/crop.model.js";
import { ApiError, ApiResponse } from "../utils/api.js";
// Create Crop
export const createCrop = async (req, res, next) => {
  try {
    // Destructure only the allowed fields from req.body.
    // Any environment data provided by the client will be ignored.
    const {
      name,
      userId,
      plantingDate,
      harvestDate,
      season,
      status,
      area,
      expectedYield,
      soilType,
    } = req.body;

    const crop = new Crop({
      name,
      userId,
      plantingDate,
      harvestDate,
      season,
      status,
      area,
      expectedYield,
      soilType,
      // Note: The "environment" field is not set here because its data is hardcoded in the DB schema.
    });

    await crop.save();
    return res.status(201).json(
      new ApiResponse(201, {
        message: "Crop created successfully",
        data: crop,
      })
    );
  } catch (error) {
    return next(
      new ApiError(500, "Error in createCrop controller", [error.message])
    );
  }
};

// Get all crops (or filter by userId)
export const getCrops = async (req, res, next) => {
  try {
    const query = req.query.userId ? { userId: req.query.userId } : {};
    const crops = await Crop.find(query);
    return res.status(200).json(new ApiResponse(200, { data: crops }));
  } catch (error) {
    return next(
      new ApiError(500, "Error in getCrops controller", [error.message])
    );
  }
};

export const getCropById = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const { userId } = req.query; // Get userId from query parameters

    if (!userId) {
      return next(
        new ApiError(400, "User ID is required", [
          "User ID must be provided as a query parameter",
        ])
      );
    }

    const crop = await Crop.findOne({ userId: userId });
    if (!crop) {
      return next(
        new ApiError(404, "Crop not found", [
          "No crop found with the provided ID for this user",
        ])
      );
    }
    return res.status(200).json(new ApiResponse(200, { data: crop }));
  } catch (error) {
    return next(
      new ApiError(500, "Error in getCropById controller", [error.message])
    );
  }
};

// Delete Crop
export const deleteCrop = async (req, res, next) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);
    if (!crop) {
      return next(new ApiError(404, "Crop not found", ["Crop not found"]));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, { message: "Crop deleted successfully" }));
  } catch (error) {
    return next(
      new ApiError(500, "Error in deleteCrop controller", [error.message])
    );
  }
};
