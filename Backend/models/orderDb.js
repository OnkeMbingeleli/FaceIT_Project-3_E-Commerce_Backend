import pool from "../pool.js";

export const postorderDb = async ({ sub_id, amount, order_status }) => {
  const [result] = await pool.query(
    "INSERT INTO orders (sub_id, amount, order_status) VALUES (?, ?, ?)",
    [sub_id, amount, order_status]
  );
  return result;
};

export const getordersDb = async () => {
  const [rows] = await pool.query("SELECT * FROM orders ORDER BY id DESC");
  return rows;
};

export const getorderByIdDb = async (id) => {
  const [rows] = await pool.query("SELECT * FROM orders WHERE id = ?", [id]);
  return rows[0] || null;
};

export const patchorderDb = async (id, payload) => {
  const fields = [];
  const values = [];

  ["amount", "order_status"].forEach((key) => {
    if (payload[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(payload[key]);
    }
  });

  if (!fields.length) return { affectedRows: 0 };
  values.push(id);

  const [result] = await pool.query(`UPDATE orders SET ${fields.join(", ")} WHERE id = ?`, values);
  return result;
};

export const deleteorderDb = async (id) => {
  const [result] = await pool.query("DELETE FROM orders WHERE id = ?", [id]);
  return result;
};