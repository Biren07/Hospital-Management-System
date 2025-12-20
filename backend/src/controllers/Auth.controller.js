import { loginUser, registerUserService } from "../services/Auth.services.js";

export const register = async (req, res) => {
  try {
    const user = await registerUserService(req.body);
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.status(200).json({
      success: true,
      token: result.token,
      user: {
        id: result.user._id,
        name: result.user.name,
        role: result.user.role,
        email: result.user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
