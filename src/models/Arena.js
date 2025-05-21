const mongoose = require('mongoose');

const pickupSlotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
}, { _id: true });

const arenaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  pickupSlots: [pickupSlotSchema],
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
}, { timestamps: true });

module.exports = mongoose.model('Arena', arenaSchema);
