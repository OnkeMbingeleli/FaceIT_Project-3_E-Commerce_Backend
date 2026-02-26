import express from "express";
import {
  postsubscriptionCon,
  getsubscriptionsCon,
  getsubscriptionByIdCon,
  patchsubscriptionCon,
  deletesubscriptionCon
} from "../controllers/subscriptionCon.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/subscription", verifyToken, postsubscriptionCon);
router.get("/subscription", verifyToken, getsubscriptionsCon);
router.get("/subscription/:id", verifyToken, getsubscriptionByIdCon);
router.patch("/subscription/:id", verifyToken, patchsubscriptionCon);
router.delete("/subscription/:id", verifyToken, deletesubscriptionCon);

export default router;
