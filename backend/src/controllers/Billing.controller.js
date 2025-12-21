import {
  createBillService,
  getInvoicesService,
  payByCashService,
  payByKhaltiService,
} from "../services/Billing.services.js";

export const generateBill = async (req, res) => {
  try {
    const bill = await createBillService(req.body);
    res.status(201).json({ success: true, data: bill });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const cashPayment = async (req, res) => {
  try {
    const invoice = await payByCashService(req.body);
    res.status(200).json({ success: true, data: invoice });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const khaltiPayment = async (req, res) => {
  try {
    const invoice = await payByKhaltiService(req.body);
    res.status(200).json({ success: true, data: invoice });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllInvoices = async (req, res) => {
  try {
    const invoice = await getInvoicesService();
    res.status(200).json({ success: true, data: invoice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
