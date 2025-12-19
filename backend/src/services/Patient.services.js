import Patient from "../models/Patient.model.js";

export const createPatientService = async () => {
  return await Patient.create(data);
};

export const getAllPatientService = async () => {
  return await Patient.find();
};

export const getPatientByIdService = async (id) => {
  return await Patient.findById(id);
};

export const updatePatientService = async (id, data) => {
  return await Patient.findByIdAndUpdate(id, data, { new: true });
};

export const deletePatientService = async (id) => {
  return await Patient.findByIdAndDelete(id);
};
