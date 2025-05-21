const jwt = require('jsonwebtoken');
const Vendor = require('../models/Vendor');

const auth = (roles = []) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) throw new Error('Authentication required');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (roles.length && !roles.includes(decoded.role)) {
      throw new Error('Unauthorized access');
    }

    if (decoded.role === 'vendor') {
      const vendor = await Vendor.findById(decoded.userId);
      if (!vendor) throw new Error('Vendor not found');
      req.vendor = vendor;
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = { auth };
