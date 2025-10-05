const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const { ConformOrder } = require("../utilse/emailsetup");

exports.Order = async (req, res) => {
    const {
      firstName: Name,
      lastName,
      class: className,
      division: Division,
      phoneNumber,
      email,
      notes: Comments,
        orderName,
        orderPrice,
        orderDetails,
    } = req.body;
    try {
        const newOrder = new Order({
            firstName: Name,
            lastName,
            class: className,
            division: Division,
            phoneNumber,
            email,
            notes: Comments,
            orderName,
            orderPrice,
            orderDetails,
        });
        await newOrder.save();
        res.status(201).json({
            message: "Order placed successfully, we will contact you soon!",
        });
        // Send confirmation email
        if (typeof ConformOrder === "function") {
          await ConformOrder(Name, email,orderName,orderPrice,orderDetails);
        } else {
          console.error("ConformOrder is not a function");
        }

    } catch (e) {
        console.error("Error saving order:", e.message);
        res.status(500).json({ error: "Server error" });
    }
}