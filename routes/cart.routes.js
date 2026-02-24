import express from "express";
import { postcartItemCon, patchcartItemCon, deletecartItemCon } from "../controllers/cart.Con.js";

const router = express.Router();

router.post("/cart-items", postcartItemCon);
router.patch("/cart-items/:id", patchcartItemCon);
router.delete("/cart-items/:id", deletecartItemCon);

export default router;