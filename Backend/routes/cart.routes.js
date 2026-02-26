import express from "express";
import { postcartItemCon, getcartItemsCon, getcartItemByIdCon, patchcartItemCon, deletecartItemCon } from "../controllers/cart.Con.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/cart-items", verifyToken, postcartItemCon);
router.get("/cart-items", verifyToken, getcartItemsCon);
router.get("/cart-items/:id", verifyToken, getcartItemByIdCon);
router.patch("/cart-items/:id", verifyToken, patchcartItemCon);
router.delete("/cart-items/:id", verifyToken, deletecartItemCon);

export default router;
