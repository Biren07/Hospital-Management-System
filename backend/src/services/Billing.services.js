import Bill from "../models/Bill.model.js";
import Invoice from "../models/Invoice.model.js";
import Payment from "../models/Payment.model.js";

export const createBillService = async (data) => {
  return await Bill.create(data);
};
export const payByCashService = async ({ billId, patientId, amount }) => {
  const payment = await Payment.create({
    bill: billId,
    patient: patientId,
    paymentMethod: "cash",
    amount,
    status: "success",
  });
  await Bill.findByIdAndUpdate(billId, { paymentMethod: "paid" });

  return await Invoice.create({
    bill: billId,
    payment: payment._id,
    patient: patientId,
    paymentMethod: "cash",
    totalAmount: amount,
  });
};

export const payByKhaltiService = async ({ billId, patientId, amount }) => {
  const transactionId = `KHALTI_${Date.now()}`;

  const payment = await Payment.create({
    bill: billId,
    patient: patientId,
    paymentMethod: "khalti",
    amount,
    transactionId,
    status: "success",
  });

  await Bill.findByIdAndUpdate(billId, { paymentStatus: "paid" });

  return await Invoice.create({
    bill: billId,
    payment: payment._id,
    patient: patientId,
    paymentMethod: "khalti",
    totalAmount: amount,
  });
};

export const getInvoicesService = async () => {
  return await Invoice.find()
    .populate("patient", "name")
    .populate("bill")
    .populate("payment");
};
