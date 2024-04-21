import mongoose from "mongoose";

// Schema for creating CartItem
const cartItemSchema = new mongoose.Schema(
  {
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    size: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number },
    discountPrice: { type: Number, default: 0 },
    quantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const CartItem =
  mongoose.models.CartItem || mongoose.model("CartItem", cartItemSchema);

export default CartItem;
