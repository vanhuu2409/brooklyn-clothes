// dotenv
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
// console.error(process.env.PORT);
// express server
import express from "express";
const { json, static: statics } = express;
const app = express();
import { connect } from "mongoose";
// cors
import cors from "cors";

// userRouter
import userRouter from "./routes/user.route.js";
// authRouter
import authRouter from "./routes/auth.route.js";
// productRouter
import productRouter from "./routes/product.route.js";
// cartRouter
import cartRouter from "./routes/cart.route.js";
// orderRouter
import orderRouter from "./routes/order.route.js";
// ratingsRouter
import ratingsRouter from "./routes/ratings.route.js";
// reviewsRouter
import reviewsRouter from "./routes/reviews.route.js";
// mongoose server

// cookie parser
import cookieParser from "cookie-parser";
import Product from "./models/product.model.js";

// running app
app.use(json());
app.use(cors());
app.use(cookieParser());

// Database connection with mongoDB
connect(process.env.MONGODB)
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(err));

// API Route Creation
app.use("/", productRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/cart", cartRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/ratings", ratingsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

// app listen
app.listen(port, (err) => {
  if (!err) {
    console.log("Server is running on port ", port);
  } else {
    console.error("Server have error: ", err);
  }
});
