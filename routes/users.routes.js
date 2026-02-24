import express from "express";
import { postusersCon, patchusersCon, deleteusersCon } from "../controllers/usersCon.js";

const router = express.Router();

router.post("/users", postusersCon);
router.patch("/users/:id", patchusersCon);
router.delete("/users/:id", deleteusersCon);

export default router;