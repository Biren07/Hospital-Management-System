import express from "express";
import {
  createAppointment,
  getAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentById,
} from "../controllers/Apointment.controller.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointment);
router.get("/:id", getAppointmentById);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
