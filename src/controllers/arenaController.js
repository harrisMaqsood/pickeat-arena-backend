const Arena = require('../models/Arena');

const createArena = async (req, res) => {
  try {
    const arena = new Arena(req.body);
    await arena.save();
    return res.status(201).json(arena);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getArenaVendors = async (req, res) => {
  try {
    const { id } = req.params;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const arena = await Arena.findById(id)
      .populate({
        path: 'assignments',
        options: {
          skip: (page - 1) * limit,
          limit,
        },
        populate: {
          path: 'vendor',
          select: 'name email status',
        },
      });

    const result = arena.assignments.map((assignment) => ({
      vendor: assignment.vendor,
      pickupSlot: arena.pickupSlots.find((slot) => slot._id.equals(assignment.pickupSlot)),
    }));

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createArena,
  getArenaVendors,
};
