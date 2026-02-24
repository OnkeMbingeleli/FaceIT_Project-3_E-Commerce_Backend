import pool from "../pool.js";

export const postusersDb = async ({ name, email, password, address }) => {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)",
    [name, email, password, address]
  );

  return result;
};

export const patchusersDb = async (id, payload) => {
  const fields = [];
  const values = [];

  ["name", "email", "password", "address"].forEach((key) => {
    if (payload[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(payload[key]);
    }
  });

  if (!fields.length) return { affectedRows: 0 };

  values.push(id);

  const [result] = await pool.query(
    `UPDATE users SET ${fields.join(", ")} WHERE id = ?`,
    values
  );

  return result;
};

export const deleteusersDb = async (id) => {
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  return result;
};