import mongoose from "mongoose";

// Schema for creating Cart
const cartSchema = new mongoose.Schema(
  {
    cartItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartItem",
        required: true,
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    total: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
