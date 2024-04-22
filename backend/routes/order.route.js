import express from "express";
import {
  createOrder,
  userAddress,
  usersOrderHistory,
} from "../controllers/order.controller.js";
import {
  cancelOrders,
  comfirmedOrders,
  deleteOrders,
  deliveryOrders,
  findOrder,
  getAllOrder,
  placeOrder,
  shippedOrders,
} from "../controllers/adminOrder.controller.js";
import { verifyToken } from "../ultils/verifyUser.js";
const router = express.Router();

router.get("/", verifyToken, getAllOrder);
router.get("/userAddress", verifyToken, userAddress);
router.post("/create", verifyToken, createOrder);
router.get("/user", verifyToken, usersOrderHistory);
router.get("/:id", verifyToken, findOrder);
router.put("/:id/placed", placeOrder);
router.put("/:id/confirmed", comfirmedOrders);
router.put("/:id/shipped", shippedOrders);
router.put("/:id/delivered", deliveryOrders);
router.put("/:id/cancelled", cancelOrders);
router.delete("/:id/deleteOrders", deleteOrders);
export default router;
