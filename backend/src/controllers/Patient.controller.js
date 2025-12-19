import {
  createPatientService,
  deletePatientService,
  getAllPatientService,
  getPatientByIdService,
  updatePatientService,
} from "../services/Patient.services.js";

export const createPatient = async (req, res) => {
  try {
    const patient = await createPatientService(req.body);
    res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllPatients = async (req, res) => {
  try {
    const patient = await getAllPatientService();
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getParientById = async (req, res) => {
  try {
    const patient = await getPatientByIdService(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updatePatient = async (req, res) => {
  try {
    const patient = await updatePatientService(req.params.id, req.body);
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const patient = await deletePatientService(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Patient deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
