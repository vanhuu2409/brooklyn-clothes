import mongoose from "mongoose";

// Schema for creating Product
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, default: 0 },
    category: { type: String, required: true },
    collections: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: Array, required: true },
    imageUrls: { type: Array, required: true },
    sizes: { type: Array, required: true },
    colors: { type: Array, required: true },

    // variations: [
    //   {
    //     color: String,
    //     size: String,
    //     // price: Number,
    //     quantity: Number,
    //   },
    // ],

    available: { type: Boolean, default: true },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ratings" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
    numRate: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
