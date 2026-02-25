import express from "express";
import {
  createPaymentIntent,
  postpaymentsCon,
  getpaymentsCon,
  getpaymentByIdCon,
  patchpaymentsCon,
  deletepaymentsCon
} from "../controllers/paymentsCon.js";

const router = express.Router();

router.post("/create-payment", createPaymentIntent);
router.post("/payments", postpaymentsCon);
router.get("/payments", getpaymentsCon);
router.get("/payments/:id", getpaymentByIdCon);
router.patch("/payments/:id", patchpaymentsCon);
router.delete("/payments/:id", deletepaymentsCon);

export default router;