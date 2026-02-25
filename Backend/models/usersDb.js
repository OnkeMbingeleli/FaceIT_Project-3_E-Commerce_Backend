import pool from "../pool.js";

export const postusersDb = async ({ name, email, password, address }) => {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)",
    [name, email, password, address]
  );
  return result;
};

export const getusersDb = async () => {
  const [rows] = await pool.query("SELECT id, name, email, address, created_at FROM users ORDER BY id DESC");
  return rows;
};

export const getuserByIdDb = async (id) => {
  const [rows] = await pool.query("SELECT id, name, email, address, created_at FROM users WHERE id = ?", [id]);
  return rows[0] || null;
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

  const [result] = await pool.query(`UPDATE users SET ${fields.join(", ")} WHERE id = ?`, values);
  return result;
};

export const deleteusersDb = async (id) => {
  const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
  return result;
};

export const getUserByEmailDb = async (email) => {
  const [rows] = await pool.query(
    "SELECT id, name, email, password, address FROM users WHERE email = ? LIMIT 1",
    [email]
  );
  return rows[0] || null;
};