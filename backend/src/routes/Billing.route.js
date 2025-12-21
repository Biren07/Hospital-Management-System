import express from "express";
import {
  cashPayment,
  generateBill,
  getAllInvoices,
  khaltiPayment,
} from "../controllers/Billing.controller.js";
const router = express.Router();
router.post("/bill", generateBill);
router.post("/pay/cash", cashPayment);
router.post("/pay/khalti", khaltiPayment);
router.get("/invoices", getAllInvoices);

export default router;
