const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  firstName: { type: String,}, // ✅ matches HTML
  lastName: { type: String,  },
  class: { type: String,  },
  division: { type: String, }, // lowercase like HTML
  phoneNumber: { type: String, },
  email: { type: String,  },
  school: { type: String,  }, // optional
  notes: { type: String, }, // optional (textarea)
  orderName: { type: String },
  orderPrice:{ type: Number },
  orderDetails: { type: String },  
  date: { type: Date, default: Date.now },
});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;