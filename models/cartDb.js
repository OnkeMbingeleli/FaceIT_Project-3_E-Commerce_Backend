import pool from "../pool.js";

export const postcartItemDb = async ({ cart_id, product_id, quantity }) => {
  const [result] = await pool.query(
    "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
    [cart_id, product_id, quantity]
  );
  return result;
};

export const patchcartItemDb = async (id, quantity) => {
  const [result] = await pool.query(
    "UPDATE cart_items SET quantity = ? WHERE id = ?",
    [quantity, id]
  );
  return result;
};

export const deletecartItemDb = async (id) => {
  const [result] = await pool.query("DELETE FROM cart_items WHERE id = ?", [id]);
  return result;
};