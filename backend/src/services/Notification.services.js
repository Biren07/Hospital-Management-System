import Notification from "../models/Notification.model.js";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmailNotification = async ({ user, email, subject, message }) => {
  try {
    await transporter.sendMail({
      from: `"Hospital Management System" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      text: message,
    });

    return await Notification.create({
      user,
      email,
      subject,
      message,
      status: "sent",
    });
  } catch (error) {
    return await Notification.create({
      user,
      email,
      subject,
      message,
      status: "failed",
    });
  }
};
export const getAllNotificationService = async () => {
  return await Notification.find().populate("User", "name email role");
};
export const getNotificationByUserService = async (id) => {
  return await Notification.find({ user: id });
};
