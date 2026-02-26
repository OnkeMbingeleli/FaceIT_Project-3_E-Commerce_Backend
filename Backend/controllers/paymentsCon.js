import Stripe from "stripe";
import dotenv from "dotenv";
import crypto from "crypto";
import { postpaymentsDb, getpaymentsDb, getpaymentByIdDb, patchpaymentsDb, deletepaymentsDb } from "../models/paymentsDb.js";

dotenv.config();

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

const OZOW_PAYMENT_URL = process.env.OZOW_PAYMENT_URL || "https://pay.ozow.com";
const OZOW_SITE_CODE = process.env.OZOW_SITE_CODE;
const OZOW_PRIVATE_KEY = process.env.OZOW_PRIVATE_KEY;
const OZOW_COUNTRY_CODE = process.env.OZOW_COUNTRY_CODE || "ZA";
const OZOW_CURRENCY_CODE = process.env.OZOW_CURRENCY_CODE || "ZAR";
const OZOW_IS_TEST = (process.env.OZOW_IS_TEST || "true").toLowerCase() === "true";
const OZOW_CANCEL_URL = process.env.OZOW_CANCEL_URL;
const OZOW_ERROR_URL = process.env.OZOW_ERROR_URL;
const OZOW_SUCCESS_URL = process.env.OZOW_SUCCESS_URL;
const OZOW_NOTIFY_URL = process.env.OZOW_NOTIFY_URL;

function toAmount(value) {
  return Number(value).toFixed(2);
}

function withQueryParam(url, key, value) {
  const u = new URL(url);
  u.searchParams.set(key, value);
  return u.toString();
}

function createOzowHash({
  SiteCode,
  CountryCode,
  CurrencyCode,
  Amount,
  TransactionReference,
  BankReference,
  CancelUrl,
  ErrorUrl,
  SuccessUrl,
  IsTest,
}) {
  const raw = `${SiteCode}${CountryCode}${CurrencyCode}${Amount}${TransactionReference}${BankReference}${CancelUrl}${ErrorUrl}${SuccessUrl}${IsTest}${OZOW_PRIVATE_KEY}`;
  return crypto.createHash("sha512").update(raw).digest("hex");
}

function requiredConfigPresent() {
  return (
    OZOW_SITE_CODE &&
    OZOW_PRIVATE_KEY &&
    OZOW_CANCEL_URL &&
    OZOW_ERROR_URL &&
    OZOW_SUCCESS_URL &&
    OZOW_NOTIFY_URL
  );
}

export const initiateOzowPayment = async (req, res) => {
  try {
    if (!requiredConfigPresent()) {
      return res.status(503).json({
        error: "Ozow is not fully configured. Set OZOW_SITE_CODE, OZOW_PRIVATE_KEY, OZOW_CANCEL_URL, OZOW_ERROR_URL, OZOW_SUCCESS_URL, and OZOW_NOTIFY_URL in backend .env",
      });
    }

    const { amount, bank_reference, transaction_reference } = req.body;

    if (amount === undefined || amount === null || Number(amount) <= 0) {
      return res.status(400).json({ error: "Valid amount is required" });
    }

    const amountFormatted = toAmount(amount);
    const transactionReference = transaction_reference || `TXN-${Date.now()}`;
    const bankReference = bank_reference || transactionReference;
    const isTestValue = OZOW_IS_TEST ? "true" : "false";

    const cancelUrl = withQueryParam(OZOW_CANCEL_URL, "txRef", transactionReference);
    const errorUrl = withQueryParam(OZOW_ERROR_URL, "txRef", transactionReference);
    const successUrl = withQueryParam(OZOW_SUCCESS_URL, "txRef", transactionReference);

    const payload = {
      SiteCode: OZOW_SITE_CODE,
      CountryCode: OZOW_COUNTRY_CODE,
      CurrencyCode: OZOW_CURRENCY_CODE,
      Amount: amountFormatted,
      TransactionReference: transactionReference,
      BankReference: bankReference,
      CancelUrl: cancelUrl,
      ErrorUrl: errorUrl,
      SuccessUrl: successUrl,
      NotifyUrl: OZOW_NOTIFY_URL,
      IsTest: isTestValue,
    };

    payload.HashCheck = createOzowHash(payload);

    return res.json({
      checkoutUrl: OZOW_PAYMENT_URL,
      payload,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ozowNotifyCon = async (req, res) => {
  try {
    const {
      SiteCode,
      CountryCode,
      CurrencyCode,
      Amount,
      TransactionReference,
      BankReference,
      CancelUrl,
      ErrorUrl,
      SuccessUrl,
      IsTest,
      HashCheck,
      TransactionId,
      Status,
    } = req.body;

    if (!HashCheck) {
      return res.status(400).send("Missing HashCheck");
    }

    const computedHash = createOzowHash({
      SiteCode,
      CountryCode,
      CurrencyCode,
      Amount,
      TransactionReference,
      BankReference,
      CancelUrl,
      ErrorUrl,
      SuccessUrl,
      IsTest,
    });

    if (computedHash.toLowerCase() !== String(HashCheck).toLowerCase()) {
      return res.status(400).send("Invalid hash");
    }

    // TODO: persist payment status (Status/TransactionId) against your order model.
    return res.status(200).send("OK");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const createPaymentIntent = async (req, res) => {
  try {
    if (!stripe) {
      return res.status(503).json({ error: "Stripe is not configured. Set STRIPE_SECRET_KEY in backend .env" });
    }

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

export const getpaymentsCon = async (_req, res) => {
  try {
    const data = await getpaymentsDb();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getpaymentByIdCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getpaymentByIdDb(id);
    if (!data) return res.status(404).json({ error: "Payment not found" });
    res.json(data);
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
