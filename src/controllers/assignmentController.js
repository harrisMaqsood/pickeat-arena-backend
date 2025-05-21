const Assignment = require('../models/Assignment');
const Arena = require('../models/Arena');
const Vendor = require('../models/Vendor');

const createAssignment = async (req, res) => {
  try {
    const { arenaId, vendorId, pickupSlotId } = req.body;

    const vendor = await Vendor.findById(vendorId);
    if (!vendor || vendor.status !== 'active') {
      return res.status(400).json({
        success: false,
        error: 'Vendor is not active or does not exist',
      });
    }

    const arena = await Arena.findById(arenaId);
    if (!arena.pickupSlots.some((slot) => slot._id.equals(pickupSlotId))) {
      return res.status(400).json({
        success: false,
        error: 'Invalid pickup slot for this arena',
      });
    }

    const existingAssignment = await Assignment.findOne({
      arena: arenaId,
      vendor: vendorId,
    });
    if (existingAssignment) {
      return res.status(409).json({
        success: false,
        error: 'Vendor already assigned to this arena',
      });
    }

    const assignment = new Assignment({
      arena: arenaId,
      vendor: vendorId,
      pickupSlot: pickupSlotId,
    });

    await assignment.save();

    arena.assignments.push(assignment);
    await arena.save();

    return res.status(201).json({
      success: true,
      data: assignment,
    });
  } catch (error) {
    console.error('Assignment creation error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error during assignment creation',
    });
  }
};

module.exports = {
  createAssignment,
};
