const express = require('express');
const { auth } = require('../middlewares/auth');
const { createVendor, addMenuItem } = require('../controllers/vendorController');
const { vendorSchema, menuItemSchema } = require('../utils/validators');
const { validate } = require('../middlewares/validate');

const router = express.Router();

router.post('/', auth(['admin']), validate(vendorSchema), createVendor);
router.post('/:id/menu', auth(['vendor']), validate(menuItemSchema), addMenuItem);

module.exports = router;
