import {
  createAppointmentService,
  deleteAppointmentService,
  getAllAppointmentService,
  getAppointmentByIdService,
  updateAppointmentService,
} from "../services/Appointment.services.js";


export const createAppointment = async (req, res) => {
  try {
    const appointment = await createAppointmentService(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const getAppointment = async (req, res) => {
  try {
    const appointment = await getAllAppointmentService();
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await getAppointmentByIdService(req.params.id);
    if (!appointment) {
      res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const appointment = await updateAppointmentService(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await deleteAppointmentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
