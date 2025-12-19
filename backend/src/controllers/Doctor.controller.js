import {
  createDoctorService,
  deleteDoctorService,
  getAllDoctorService,
  getDoctorByIdService,
  updateDoctorService,
} from "../services/Doctor.services.js";

export const createDoctor = async (req, res) => {
  try {
    const doctor = await createDoctorService(req.body);
    res.status(201).json({ success: true, data: doctor });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const doctor = await getAllDoctorService();
    res.status(200).json({ success: true, data: doctor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getDoctor = async (req, res) => {
  try {
    const doctor = await getDoctorByIdService(req.params.id);
    if (!doctor) {
      res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ success: true, data: doctor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const updateDoctor = async (req, res) => {
  try {
    const doctor = await updateDoctorService(req.params.id, req.body);
    res.status(200).json({ success: true, data: doctor });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await deleteDoctorService(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Doctor deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
