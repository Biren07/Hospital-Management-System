// routes/notification.routes.js
import express from "express";
import {
  sendNotification,
  getNotifications,
  getUserNotifications,
} from "../controllers/Notification.controller.js";

const router = express.Router();

router.post("/", sendNotification);
router.get("/", getNotifications);
router.get("/user/:userId", getUserNotifications);

export default router;
