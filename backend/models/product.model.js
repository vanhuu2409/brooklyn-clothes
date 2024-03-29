import mongoose from "mongoose";

// Schema for creating Product
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    category: { type: String, required: true },
    collections: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: Array, required: true },
    imageUrls: { type: Array, required: true },
    sizes: { type: Array, required: true },
    colors: { type: Array, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
