import mongoose from "mongoose";

// Schema for creating Address
const addressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobile: { type: String, required: true },
    street: { type: String, required: true },
    ward: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Address =
  mongoose.models.Address || mongoose.model("Address", addressSchema);

export default Address;
