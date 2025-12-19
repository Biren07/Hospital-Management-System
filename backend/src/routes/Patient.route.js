
import express from "express";
import {
  createPatient,
  deletePatient,
  getAllPatients,
  getParientById,
  updatePatient,
} from "../controllers/Patient.controller.js";

const router = express.Router();

router.post("/", createPatient);
router.get("/", getAllPatients);
router.get("/:id", getParientById);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;
