import pool from "../pool.js";

export const postsubscriptionDb = async ({ user_id, package_id, start_date, status }) => {
  const [result] = await pool.query(
    "INSERT INTO subscriptions (user_id, package_id, start_date, status) VALUES (?, ?, ?, ?)",
    [user_id, package_id, start_date, status]
  );

  return result;
};

export const patchsubscriptionDb = async (id, payload) => {
  const fields = [];
  const values = [];

  ["package_id", "start_date", "status"].forEach((key) => {
    if (payload[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(payload[key]);
    }
  });

  if (!fields.length) return { affectedRows: 0 };

  values.push(id);

  const [result] = await pool.query(
    `UPDATE subscriptions SET ${fields.join(", ")} WHERE id = ?`,
    values
  );

  return result;
};

export const deletesubscriptionDb = async (id) => {
  const [result] = await pool.query("DELETE FROM subscriptions WHERE id = ?", [id]);
  return result;
};