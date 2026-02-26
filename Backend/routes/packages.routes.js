import express from "express";
import { getpackagesCon, postpackagesCon, patchpackagesCon, deletepackagesCon } from "../controllers/packagesCon.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/packages", verifyToken, getpackagesCon);
router.post("/packages", verifyToken, postpackagesCon);
router.patch("/packages/:id", verifyToken, patchpackagesCon);
router.delete("/packages/:id", verifyToken, deletepackagesCon);

export default router;
