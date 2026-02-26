import pool from "../pool.js";

export const postusersDb = async ({ full_name, email, password_hash, phone }) => {
  const [result] = await pool.query(
    "INSERT INTO users (full_name, email, password_hash, phone) VALUES (?, ?, ?, ?)",
    [full_name, email, password_hash, phone || null]
  );
  return result;
};

export const getusersDb = async () => {
  const [rows] = await pool.query(
    "SELECT id, full_name, email, role, phone, is_verified, created_at, updated_at FROM users ORDER BY id DESC"
  );
  return rows;
};

export const getuserByIdDb = async (id) => {
  const [rows] = await pool.query(
    "SELECT id, full_name, email, role, phone, is_verified, created_at, updated_at FROM users WHERE id = ?",
    [id]
  );
  return rows[0] || null;
};

export const patchusersDb = async (id, payload) => {
  const fields = [];
  const values = [];

  ["full_name", "email", "password_hash", "phone", "role", "is_verified"].forEach((key) => {
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
    "SELECT id, full_name, email, password_hash, role, phone, is_verified FROM users WHERE email = ? LIMIT 1",
    [email]
  );
  return rows[0] || null;
};
