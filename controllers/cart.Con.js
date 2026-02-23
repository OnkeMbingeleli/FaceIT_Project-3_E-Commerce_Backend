import Stripe from "stripe";
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Creating a payment intent
const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000, // in cents (R10.00 = 1000 cents)
  currency: "zar",
  automatic_payment_methods: { enabled: true }
});

console.log(paymentIntent.client_secret); // send this to frontend
