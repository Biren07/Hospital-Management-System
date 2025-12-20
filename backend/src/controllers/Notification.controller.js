import {
  getAllNotificationService,
  getNotificationByUserService,
  sendEmailNotification,
} from "../services/Notification.services.js";

export const sendNotification = async (req, res) => {
  try {
    const notification = await sendEmailNotification(req.body);
    res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const notifications = await getAllNotificationService();
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await getNotificationByUserService(req.params.userId);
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
