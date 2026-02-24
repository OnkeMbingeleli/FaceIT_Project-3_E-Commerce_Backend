import pool from "../pool.js";

export const postpaymentsDb = async ({ order_id, amount, pay_method, pay_date, pay_status }) => {
  const [result] = await pool.query(
    "INSERT INTO payments (order_id, amount, pay_method, pay_date, pay_status) VALUES (?, ?, ?, ?, ?)",
    [order_id, amount, pay_method, pay_date, pay_status]
  );
  return result;
};

export const patchpaymentsDb = async (id, payload) => {
  const fields = [];
  const values = [];

  ["amount", "pay_method", "pay_date", "pay_status"].forEach((key) => {
    if (payload[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(payload[key]);
    }
  });

  if (!fields.length) return { affectedRows: 0 };

  values.push(id);
  const [result] = await pool.query(`UPDATE payments SET ${fields.join(", ")} WHERE id = ?`, values);
  return result;
};

export const deletepaymentsDb = async (id) => {
  const [result] = await pool.query("DELETE FROM payments WHERE id = ?", [id]);
  return result;
};