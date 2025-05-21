const Vendor = require('../models/Vendor');

const createVendor = async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    return res.status(201).json(vendor);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const addMenuItem = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

    vendor.menu.push(req.body);
    await vendor.save();
    return res.json(vendor.menu);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createVendor,
  addMenuItem,
};
