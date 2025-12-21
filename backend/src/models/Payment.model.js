import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    bill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bill",
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "khalti"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["success", "failed"],
      default: "success",
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
