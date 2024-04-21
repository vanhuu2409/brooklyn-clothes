import mongoose from "mongoose";

// Schema for creating Users
const userSchema = new mongoose.Schema(
  {
    username: { type: String, trim: true, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    role: { type: String, default: "Customer" },
    // mobile: { type: String, default: "" },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    payment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ratings" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
