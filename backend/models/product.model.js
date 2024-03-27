import mongoose from "mongoose";

// Schema for creating Users
const productSchema = new mongoose.Schema(
  {
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
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
