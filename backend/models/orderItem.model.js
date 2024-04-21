import mongoose from "mongoose";

// Schema for creating OrderItem
const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    size: { type: String },
    color: { type: String },
    price: { type: Number },
    discountPrice: { type: Number, default: 0 },
    quantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const OrderItem =
  mongoose.models.OrderItem || mongoose.model("OrderItem", orderItemSchema);

export default OrderItem;
