import User from "../models/User.model.js";

export const createUserService = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (user) {
    throw new Error("User already exist");
  }
  return await User.create(data);
};

export const getAllUserService = async () => {
  return await User.find().select("-password");
};
export const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

export const updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true }).select(
    "-password"
  );
};

export const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};
