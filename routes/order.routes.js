import express from "express";
import { postorderCon, patchorderCon, deleteorderCon } from "../controllers/orderCon.js";

const router = express.Router();

router.post("/orders", postorderCon);
router.patch("/orders/:id", patchorderCon);
router.delete("/orders/:id", deleteorderCon);

export default router;