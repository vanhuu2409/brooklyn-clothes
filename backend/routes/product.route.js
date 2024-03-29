import express from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/getall", getProducts);
export default router;
