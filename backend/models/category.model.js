import mongoose from "mongoose";

// Schema for creating Category
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 50 },
    level: { type: Number, required: true },
    collections: { type: mongoose.Schema.Types.ObjectId, ref: "Collections" },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
