import Crop from "../models/crop.model.js";
import jwt from "jsonwebtoken";
import { ApiError, ApiResponse } from "../utils/api.js";
// Create Crop
// 
export const createCrop = async (req, res, next) => {
  try {
    // Extract token from query parameters
    const { token } = req.query;
    // Verify and decode token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // Extract allowed fields from request body
    const {
      name,
      plantingDate,
      harvestDate,
      season,
      status,
      area,
      expectedYield,
      soilType,
    } = req.body;

    // Use decoded user ID from the token
    const userId = decoded.id;

    // Create a new Crop document
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
      // "environment" is not set as its data is hardcoded in the schema.
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
     // Extract token from query parameters
     const { token } = req.query;
     // Verify and decode token using the secret key
     const decoded = jwt.verify(token, process.env.SECRET_KEY);
     // Extract allowed fields from request body
     const userId = decoded.id;
    if (!userId) {
      return next(
        new ApiError(400, "User ID is required", [
          "User ID must be provided as a query parameter",
        ])
      );
    }

    const crop = await Crop.find({ userId});
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

export const updateCropProgress = async (req, res, next) => {
  try {
    const { cropId } = req.params;
    const { progress } = req.body;

    // Validate that progress is an array with 7 boolean values.
    if (!Array.isArray(progress) || progress.length !== 7) {
      return next(
        new ApiError(400, "Invalid progress data", [
          "Progress must be an array of 7 boolean values.",
        ])
      );
    }

    const updatedCrop = await Crop.findByIdAndUpdate(
      cropId,
      { progress },
      { new: true }
    );

    if (!updatedCrop) {
      return next(
        new ApiError(404, "Crop not found", ["No crop found with this ID"])
      );
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { message: "Progress updated", data: updatedCrop }));
  } catch (error) {
    return next(
      new ApiError(500, "Error updating crop progress", [error.message])
    );
  }
};

export const getCropProgress = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId);
    
    if (!crop) {
      return res.status(404).json({ error: 'Crop not found' });
    }
    
    res.status(200).json({
      success: true,
      data: {
        progress: crop.progress || []
      }
    });
  } catch (error) {
    console.error('Error fetching crop progress:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
};