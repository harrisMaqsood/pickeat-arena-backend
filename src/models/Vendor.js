const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  category: String,
  title: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
});

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  menu: [menuItemSchema],
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema);
