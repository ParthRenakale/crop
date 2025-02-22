import express from "express";
import {
  forgotPassword,
  resetPassword,
  signin,
  signup,
  verifyEmail,
} from "../controllers/userController.js";
import {
  createCrop,
  deleteCrop,
  getCropById,
  getCropProgress,
  getCrops,
  updateCropProgress,
} from "../controllers/crop.Controller.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.get("/verify-email", verifyEmail);
router.post("/reset-password", resetPassword);
router.post("/createCrop", createCrop);
router.get("/getCrops", getCrops);
router.get("/getCropById", getCropById);
router.delete("/deleteCrop/:id", deleteCrop);
router.put("/crops/:cropId/progress", updateCropProgress);
router.get("/crops/:cropId/progress", getCropProgress);
export default router;
