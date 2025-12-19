import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserById,
  updateUserService,
} from "../services/User.services.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res
      .status(201)
      .json({ success: true, message: "User create successfully", user: data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await getAllUserService();
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await deleteUserService(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
