import express from "express";
import {
  createPaymentIntent,
  initiateOzowPayment,
  ozowNotifyCon,
  postpaymentsCon,
  getpaymentsCon,
  getpaymentByIdCon,
  patchpaymentsCon,
  deletepaymentsCon
} from "../controllers/paymentsCon.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create-payment", verifyToken, createPaymentIntent);
router.post("/ozow/initiate", verifyToken, initiateOzowPayment);
router.post("/ozow/notify", ozowNotifyCon);
router.post("/payments", verifyToken, postpaymentsCon);
router.get("/payments", verifyToken, getpaymentsCon);
router.get("/payments/:id", verifyToken, getpaymentByIdCon);
router.patch("/payments/:id", verifyToken, patchpaymentsCon);
router.delete("/payments/:id", verifyToken, deletepaymentsCon);

export default router;
