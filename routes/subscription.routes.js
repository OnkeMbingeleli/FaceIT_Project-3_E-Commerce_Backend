import express from "express";
import {
  postsubscriptionCon,
  patchsubscriptionCon,
  deletesubscriptionCon
} from "../controllers/subscriptionCon.js";

const router = express.Router();

router.post("/subscription", postsubscriptionCon);
router.patch("/subscription/:id", patchsubscriptionCon);
router.delete("/subscription/:id", deletesubscriptionCon);

export default router;