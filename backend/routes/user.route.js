import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  getAllUser,
  findUserById,
  findUserProfile,
} from "../controllers/user.controller.js";
import { verifyToken } from "../ultils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.get("/", getAllUser);
router.get("/profile", verifyToken, findUserProfile);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
