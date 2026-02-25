import { getpackagesDb, postpackagesDb, patchpackagesDb, deletepackagesDb } from "../models/packagesDb.js";

export const getpackagesCon = async (req, res) => {
  try {
    const data = await getpackagesDb();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postpackagesCon = async (req, res) => {
  try {
    const { package_name, price, duration, description } = req.body;
    const data = await postpackagesDb({ package_name, price, duration, description });
    res.status(201).json({ message: "Package created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchpackagesCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patchpackagesDb(id, req.body);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Package not found or no fields to update" });
    }

    res.json({ message: "Package updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletepackagesCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deletepackagesDb(id);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json({ message: "Package deleted", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};