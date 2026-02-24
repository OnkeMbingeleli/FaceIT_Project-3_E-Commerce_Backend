import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import orderRoutes from "./routes/order.routes.js";
import paymentRoutes from "./routes/payments.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import packageRoutes from "./routes/packages.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", usersRoutes);
app.use("/api", subscriptionRoutes);
app.use("/api", orderRoutes);
app.use("/api", cartRoutes);
app.use("/api", packageRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/health", (_, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));