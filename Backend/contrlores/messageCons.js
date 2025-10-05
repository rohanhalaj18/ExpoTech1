const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const { enquiry } = require("../utilse/emailsetup");
const {enquiryNotification} = require("../utilse/emailsetup");
exports.enquiry = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, subject, message } =
    req.body;
  try {
    const newMessage = new Message({
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
    });
    await newMessage.save();
    try {
      await enquiry(firstName,lastName, email, phoneNumber,subject, message);
      await enquiryNotification(
        firstName,
        lastName,
        email,
        phoneNumber,
        subject,
        message
      );
    } catch (e) {
      console.error("Error sending email:", e.message);
    }
    res.status(201).json({
      message: "Message sent successfully,we will contact you soon!",
    });
  } catch (e) {
    console.error("Error saving message:", e.message);
    res.status(500).json({ error: "Server error" });
  }
};
