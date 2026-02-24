import Stripe from "stripe";
import dotenv from "dotenv";
import { postpaymentsDb, patchpaymentsDb, deletepaymentsDb } from "../models/paymentsDb.js";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    if (amount === undefined || amount === null) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100),
      currency: "zar",
      automatic_payment_methods: { enabled: true }
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postpaymentsCon = async (req, res) => {
  try {
    const { order_id, amount, pay_method, pay_date, pay_status } = req.body;
    const data = await postpaymentsDb({ order_id, amount, pay_method, pay_date, pay_status });
    res.status(201).json({ message: "Payment record created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchpaymentsCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patchpaymentsDb(id, req.body);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Payment not found or no fields to update" });
    }

    res.json({ message: "Payment updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletepaymentsCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deletepaymentsDb(id);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Payment not found" });
    }

    res.json({ message: "Payment deleted", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};