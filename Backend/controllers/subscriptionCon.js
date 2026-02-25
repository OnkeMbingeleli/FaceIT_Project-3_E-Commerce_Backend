import {
  postsubscriptionDb,
  getsubscriptionsDb,
  getsubscriptionByIdDb,
  patchsubscriptionDb,
  deletesubscriptionDb
} from "../models/subscriptionDb.js";

export const postsubscriptionCon = async (req, res) => {
  try {
    const { user_id, package_id, start_date, status } = req.body;
    const data = await postsubscriptionDb({ user_id, package_id, start_date, status });
    res.status(201).json({ message: "Subscription created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getsubscriptionsCon = async (_req, res) => {
  try {
    const data = await getsubscriptionsDb();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getsubscriptionByIdCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getsubscriptionByIdDb(id);
    if (!data) return res.status(404).json({ error: "Subscription not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchsubscriptionCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patchsubscriptionDb(id, req.body);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Subscription not found or no fields to update" });
    }

    res.json({ message: "Subscription updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletesubscriptionCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deletesubscriptionDb(id);

    if (!data.affectedRows) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    res.json({ message: "Subscription deleted", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};