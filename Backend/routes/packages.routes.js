import express from "express";
import { getpackagesCon, postpackagesCon, patchpackagesCon, deletepackagesCon } from "../controllers/packagesCon.js";

const router = express.Router();

router.get("/packages", getpackagesCon);
router.post("/packages", postpackagesCon);
router.patch("/packages/:id", patchpackagesCon);
router.delete("/packages/:id", deletepackagesCon);

export default router;