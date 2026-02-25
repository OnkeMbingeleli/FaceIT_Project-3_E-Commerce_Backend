import {
  postusersDb,
  getusersDb,
  getuserByIdDb,
  patchusersDb,
  deleteusersDb,
  getUserByEmailDb
} from "../models/usersDb.js";

export const postusersCon = async (req, res) => {
  try {
    const name = req.body.name || req.body.full_name;
    const { email, password } = req.body;
    const address = req.body.address || null;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name/full_name, email and password are required" });
    }

    const data = await postusersDb({ name, email, password, address });
    res.status(201).json({ message: "User created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getusersCon = async (_req, res) => {
  try {
    const data = await getusersDb();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getuserByIdCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getuserByIdDb(id);
    if (!data) return res.status(404).json({ error: "User not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginusersCon = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }

    const user = await getUserByEmailDb(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = `demo-token-${user.id}`;
    res.json({ token, user: { id: user.id, full_name: user.name, email: user.email } });
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