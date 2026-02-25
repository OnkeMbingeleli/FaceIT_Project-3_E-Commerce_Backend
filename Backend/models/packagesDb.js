import pool from "../pool.js";

export const getpackagesDb = async () => {
  const [data] = await pool.query("SELECT * FROM weekly_packages");
  return data;
};

export const postpackagesDb = async ({ package_name, price, duration, description }) => {
  const [result] = await pool.query(
    "INSERT INTO weekly_packages (package_name, price, duration, description) VALUES (?, ?, ?, ?)",
    [package_name, price, duration, description]
  );
  return result;
};

export const patchpackagesDb = async (id, payload) => {
  const fields = [];
  const values = [];

  ["package_name", "price", "duration", "description"].forEach((key) => {
    if (payload[key] !== undefined) {
      fields.push(`${key} = ?`);
      values.push(payload[key]);
    }
  });

  if (!fields.length) return { affectedRows: 0 };

  values.push(id);
  const [result] = await pool.query(`UPDATE weekly_packages SET ${fields.join(", ")} WHERE id = ?`, values);
  return result;
};

export const deletepackagesDb = async (id) => {
  const [result] = await pool.query("DELETE FROM weekly_packages WHERE id = ?", [id]);
  return result;
};