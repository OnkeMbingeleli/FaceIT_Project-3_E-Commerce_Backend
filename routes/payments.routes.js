import express from "express";
import {
  createPaymentIntent,
  postpaymentsCon,
  patchpaymentsCon,
  deletepaymentsCon
} from "../controllers/paymentsCon.js";

const router = express.Router();

router.post("/create-payment", createPaymentIntent);
router.post("/payments", postpaymentsCon);
router.patch("/payments/:id", patchpaymentsCon);
router.delete("/payments/:id", deletepaymentsCon);

export default router;