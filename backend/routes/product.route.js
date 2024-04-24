import express from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../ultils/verifyUser.js";
// import allowCors from "../ultils/allowCors.js";
const router = express.Router();

router.get("/getall", getProducts);
router.get("/getall/:id", getProduct);
router.post("/create", verifyToken, createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", verifyToken, updateProduct);

export default router;
