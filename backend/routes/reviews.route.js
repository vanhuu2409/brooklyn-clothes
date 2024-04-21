import express from "express";
import { verifyToken } from "../ultils/verifyUser.js";
import {
  createReview,
  getProductReviews,
} from "../controllers/reviews.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createReview);
router.put("/product/:productId", verifyToken, getProductReviews);

export default router;
