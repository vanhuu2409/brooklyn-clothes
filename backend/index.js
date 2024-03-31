// dotenv
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
console.log(process.env.PORT);
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
// mongoose server

// cookie parser
import cookieParser from "cookie-parser";

// running app
app.use(json());
app.use(cors());
app.use(cookieParser());

// Database connection with mongoDB
connect(process.env.MONGODB)
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(err));

// API Route Creation
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
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
