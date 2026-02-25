import { postcartItemDb, getcartItemsDb, getcartItemByIdDb, patchcartItemDb, deletecartItemDb } from "../models/cartDb.js";

export const postcartItemCon = async (req, res) => {
  try {
    const { cart_id, product_id, quantity } = req.body;
    const data = await postcartItemDb({ cart_id, product_id, quantity });
    res.status(201).json({ message: "Cart item created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getcartItemsCon = async (_req, res) => {
  try {
    const data = await getcartItemsDb();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getcartItemByIdCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getcartItemByIdDb(id);
    if (!data) return res.status(404).json({ error: "Cart item not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchcartItemCon = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const data = await patchcartItemDb(id, quantity);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.json({ message: "Cart item updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletecartItemCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deletecartItemDb(id);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.json({ message: "Cart item deleted", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};