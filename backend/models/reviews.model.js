import mongoose from "mongoose";

// Schema for creating Reviews
const reviewsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

const Reviews =
  mongoose.models.Reviews || mongoose.model("Reviews", reviewsSchema);

export default Reviews;
