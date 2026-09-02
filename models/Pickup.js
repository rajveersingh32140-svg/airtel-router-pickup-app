const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serialNumber: {
    type: String,
    required: true
  },
  routerModel: {
    type: String,
    required: true
  },
  pickupDate: {
    type: Date,
    required: true
  },
  timeSlot: {
    type: String,
    enum: ['09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in-transit', 'completed', 'cancelled'],
    default: 'pending'
  },
  deliveryPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    type: String,
    required: true
  },
  notes: String,
  otp: String,
  otpVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pickup', pickupSchema);
