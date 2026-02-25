import express from "express";
import { postcartItemCon, getcartItemsCon, getcartItemByIdCon, patchcartItemCon, deletecartItemCon } from "../controllers/cart.Con.js";

const router = express.Router();

router.post("/cart-items", postcartItemCon);
router.get("/cart-items", getcartItemsCon);
router.get("/cart-items/:id", getcartItemByIdCon);
router.patch("/cart-items/:id", patchcartItemCon);
router.delete("/cart-items/:id", deletecartItemCon);

export default router;