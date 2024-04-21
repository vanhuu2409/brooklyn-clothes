import mongoose from "mongoose";

// Schema for creating Order
const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
      },
    ],
    deliveryDate: { type: Date },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      // required: true,
    },
    paymentDetails: {
      paymentMethod: { type: String },
      transactionId: { type: String },
      paymentId: { type: String },
      paymentStatus: { type: String, default: "Pending" },
    },
    orderStatus: { type: String, default: "Pending" },
    total: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
