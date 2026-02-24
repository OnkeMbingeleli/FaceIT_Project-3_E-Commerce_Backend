import { postorderDb, patchorderDb, deleteorderDb } from "../models/orderDb.js";

export const postorderCon = async (req, res) => {
  try {
    const { sub_id, amount, order_status } = req.body;

    const data = await postorderDb({
      sub_id,
      amount,
      order_status
    });

    res.status(201).json({ message: "Order created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchorderCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patchorderDb(id, req.body);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Order not found or no fields to update" });
    }

    res.json({ message: "Order updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteorderCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteorderDb(id);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order deleted", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};