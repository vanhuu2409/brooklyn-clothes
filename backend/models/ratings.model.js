import mongoose from "mongoose";

// Schema for creating Ratings
const ratingsSchema = new mongoose.Schema(
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
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const Ratings =
  mongoose.models.Ratings || mongoose.model("Ratings", ratingsSchema);

export default Ratings;
