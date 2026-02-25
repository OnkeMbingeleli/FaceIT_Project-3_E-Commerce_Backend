import express from "express";
import { postorderCon, getordersCon, getorderByIdCon, patchorderCon, deleteorderCon } from "../controllers/orderCon.js";

const router = express.Router();

router.post("/orders", postorderCon);
router.get("/orders", getordersCon);
router.get("/orders/:id", getorderByIdCon);
router.patch("/orders/:id", patchorderCon);
router.delete("/orders/:id", deleteorderCon);

export default router;