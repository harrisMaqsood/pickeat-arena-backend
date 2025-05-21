const express = require('express');
const { auth } = require('../middlewares/auth');
const { createVendor, addMenuItem } = require('../controllers/vendorController');

const router = express.Router();

router.post('/', auth(['admin']), createVendor);
router.post('/:id/menu', auth(['vendor']), addMenuItem);

module.exports = router;
