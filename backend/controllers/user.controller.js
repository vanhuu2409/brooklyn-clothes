import bcryptjs from "bcryptjs";
import { errorHandler } from "../ultils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "Api Route is running" });
};

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("User not found: ", { userId });
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const findUserProfile = async (req, res, next) => {
  try {
    const userProfile = await User.findById(req.user.id);
    res.status(200).json({ userProfile });
  } catch (error) {
    next(error);
  }
};

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne(email);
    if (!user) {
      throw new Error("User not found: ", { email });
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users) {
      return next(errorHandler(401, "User not found"));
    }
    res.status(200).json(users);
    return users;
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can only update your own account"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can only delete your own account"));
  }
  try {
    await User.findByIdAndDelete(req.user.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};
