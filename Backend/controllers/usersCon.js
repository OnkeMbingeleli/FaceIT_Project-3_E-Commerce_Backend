import {
  postusersDb,
  getusersDb,
  getuserByIdDb,
  patchusersDb,
  deleteusersDb,
  getUserByEmailDb
} from "../models/usersDb.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "change-this-in-env";

export const postusersCon = async (req, res) => {
  try {
    const name = req.body.name || req.body.full_name;
    const { email, password } = req.body;
    const address = req.body.address || null;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "name/full_name, email and password are required" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const data = await postusersDb({ name, email, password: passwordHash, address });
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
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, user: { id: user.id, full_name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchusersCon = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = { ...req.body };

    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }

    const data = await patchusersDb(id, payload);

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
