import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const registerUserService = async (data) => {
  const userExist = await User.findOne({ email: data.email });
  if (userExist) {
    throw new Error("User already exist ");
  }
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  const user = await User.create(data);
  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invaild credentails");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  return { user, token };
};
