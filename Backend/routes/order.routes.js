import express from "express";
import { postorderCon, getordersCon, getorderByIdCon, patchorderCon, deleteorderCon } from "../controllers/orderCon.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/orders", verifyToken, postorderCon);
router.get("/orders", verifyToken, getordersCon);
router.get("/orders/:id", verifyToken, getorderByIdCon);
router.patch("/orders/:id", verifyToken, patchorderCon);
router.delete("/orders/:id", verifyToken, deleteorderCon);

export default router;
