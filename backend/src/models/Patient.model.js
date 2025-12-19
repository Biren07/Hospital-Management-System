import mongoose from "mongoose";

const patientSchema=new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    address: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    emergencyContact: {
      name: String,
      phone: String,
    },
    isAdmitted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Patient=mongoose.model("Patient",patientSchema);
export default Patient;