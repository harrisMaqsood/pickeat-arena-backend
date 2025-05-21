const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  arena: { type: mongoose.Schema.Types.ObjectId, ref: 'Arena', required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  pickupSlot: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { timestamps: true });

assignmentSchema.index({ arena: 1, vendor: 1 }, { unique: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
