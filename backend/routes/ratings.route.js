import express from "express";
import { verifyToken } from "../ultils/verifyUser.js";
import {
  createRating,
  getProductRatings,
} from "../controllers/ratings.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createRating);
router.put("/product/:productId", verifyToken, getProductRatings);

export default router;
