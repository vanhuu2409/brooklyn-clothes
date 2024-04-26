import express from "express";
import { verifyToken } from "../ultils/verifyUser.js";
import {
  createRating,
  getProductRatings,
} from "../controllers/ratings.controller.js";

const router = express.Router();

router.post("/create/:productId", verifyToken, createRating);
router.get("/product/:productId", getProductRatings);

export default router;
