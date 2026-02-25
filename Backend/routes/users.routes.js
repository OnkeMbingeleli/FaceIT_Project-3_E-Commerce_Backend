import express from "express";
import { postusersCon, getusersCon, getuserByIdCon, loginusersCon, patchusersCon, deleteusersCon } from "../controllers/usersCon.js";

const router = express.Router();

router.post("/users", postusersCon);
router.get("/users", getusersCon);
router.get("/users/:id", getuserByIdCon);
router.post("/users/login", loginusersCon);
router.patch("/users/:id", patchusersCon);
router.delete("/users/:id", deleteusersCon);

export default router;