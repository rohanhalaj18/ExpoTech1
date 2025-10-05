const express = require("express");
const router = express.Router();
const { Order } = require("../contrlores/ordercons");

router.post("/placeorder", Order);
module.exports = router;