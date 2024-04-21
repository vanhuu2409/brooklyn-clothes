import express from "express";
import {
  addCartItem,
  createCart,
  deleteCartItem,
  findUserCart,
  updateCartItem,
} from "../controllers/cart.controller.js";
import { verifyToken } from "../ultils/verifyUser.js";
const router = express.Router();

router.get("/", verifyToken, findUserCart);
router.put("/add", verifyToken, addCartItem);
router.put("/update/:id", verifyToken, updateCartItem);
router.delete("/delete/:id", verifyToken, deleteCartItem);
export default router;
