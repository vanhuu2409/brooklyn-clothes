const port = 4000;
// express server
import express from "express";
const { json, static: statics } = express;
const app = express();
// userRouter
import userRouter from "./routes/user.route.js";
// authRouter
import authRouter from "./routes/auth.route.js";

// mongoose server
import { connect, model } from "mongoose";
// jsonwebtoken
import jwt from "jsonwebtoken";
const { sign } = jwt;
// multer for storage img
import multer, { diskStorage } from "multer";
// path
import { extname } from "path";
// cors
import cors from "cors";

// dotenv
import dotenv from "dotenv";
dotenv.config();

// running app
app.use(json());
app.use(cors());

// Database connection with mongoDB
connect(process.env.MONGODB)
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(err));

// API Route Creation
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Image Storage Engine
const storage = diskStorage({
  destination: "./upload/images",
  filename: (req, file, callback) => {
    const time = Date.now();
    return callback(
      null,
      `${file.fieldname}_${time}${extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

// Creating upload endpoint
app.use("/images", statics("upload/images"));

app.post("/upload", upload.single("products"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for creating Products
const Product = model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  collections: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// Schema for creating Users
const Users = model("Users", {
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  cartdata: { type: Object },
  createAt: { type: Date, default: Date.now },
});

// Creating Endpoint for Registering User
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      error: "existing user already registered with same email",
    });
  }
  let cart = {};
  for (let i = 0; i < 100; i++) {
    cart[i] = 0;
  }
  // create user and save to db
  const user = new Users({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();
  console.log("save user successfully", user);

  // jwt user and token
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// Creating Endpoint for Login User
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        id: user.id,
      };
      const token = sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "Wrong password" });
    }
  } else {
    res.json({ success: false, error: "Wrong email id" });
  }
});

// Endpoint add product
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  //   unit id for product
  let id;
  //   get id from last product created
  if (products.length > 0) {
    let last_product_arr = products.slice(-1);
    let last_product = last_product_arr[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    collections: req.body.collections,
    description: req.body.description,
    details: req.body.details,
    image: req.body.image,
    size: req.body.size,
    color: req.body.color,
  });
  console.log(product);
  // save product to database
  await product.save();
  console.log("Product is successfully saved to database");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API for deleting product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product deleted successfully");
  res.json({ success: true, name: req.body.name });
});

// Creating API for get all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("Get All Products successfully");
  res.send(products);
});

// app listen
app.listen(port, (err) => {
  if (!err) {
    console.log("Server is running on port ", port);
  } else {
    console.error("Server have error: ", err);
  }
});
