import express from "express";
import {
  postsubscriptionCon,
  getsubscriptionsCon,
  getsubscriptionByIdCon,
  patchsubscriptionCon,
  deletesubscriptionCon
} from "../controllers/subscriptionCon.js";

const router = express.Router();

router.post("/subscription", postsubscriptionCon);
router.get("/subscription", getsubscriptionsCon);
router.get("/subscription/:id", getsubscriptionByIdCon);
router.patch("/subscription/:id", patchsubscriptionCon);
router.delete("/subscription/:id", deletesubscriptionCon);

export default router;