import { postusersDb, patchusersDb, deleteusersDb } from "../models/usersDb.js";

export const postusersCon = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const data = await postusersDb({ name, email, password, address });
    res.status(201).json({ message: "User created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchusersCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patchusersDb(id, req.body);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "User not found or no fields to update" });
    }

    res.json({ message: "User updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteusersCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteusersDb(id);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};