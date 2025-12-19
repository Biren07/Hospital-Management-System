import Doctor from "../models/Doctor.model.js";

export const createDoctorService = async (data) => {
  return await Doctor.create(data);
};

export const getAllDoctorService = async () => {
  return await Doctor.find();
};
export const getDoctorByIdService = async (id) => {
  return await Doctor.findById(id);
};
export const updateDoctorService = async (id, data) => {
  return await Doctor.findByIdAndUpdate(id, data, { new: true });
};
export const deleteDoctorService = async (id) => {
  return await Doctor.findByIdAndDelete(id);
};
