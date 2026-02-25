import express from "express";
import { postusersCon, getusersCon, getuserByIdCon, loginusersCon, patchusersCon, deleteusersCon } from "../controllers/usersCon.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/users", postusersCon);
router.post("/users/login", loginusersCon);

router.get("/users", verifyToken, getusersCon);
router.get("/users/:id", verifyToken, getuserByIdCon);
router.patch("/users/:id", verifyToken, patchusersCon);
router.delete("/users/:id", verifyToken, deleteusersCon);

export default router;
