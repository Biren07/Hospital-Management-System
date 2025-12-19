import Appointment from "../models/Appointment.model.js";

export const createAppointmentService = async (data) => {
  return await Appointment.create(data);
};

export const getAllAppointmentService = async () => {
  return await Appointment.find()
    .populate("patient", "name phone")
    .populate("doctor", "name specialization");
};

export const getAppointmentByIdService = async (id) => {
  return await Appointment.findById(id).populate("patient").populate("doctor");
};

export const updateAppointmentService = async (id, data) => {
  return await Appointment.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteAppointmentService = async (id) => {
  return await Appointment.findByIdAndDelete(id);
};
