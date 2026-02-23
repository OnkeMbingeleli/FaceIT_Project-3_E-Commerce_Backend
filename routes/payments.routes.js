import express from 'express';
import { createPaymentIntent } from '../controllers/paymentsCon.js';

const router = express.Router();

// POST /api/payment/create-payment
router.post('/create-payment', createPaymentIntent);

export default router;
