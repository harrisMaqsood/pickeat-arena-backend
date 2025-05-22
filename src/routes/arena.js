const express = require('express');
const { auth } = require('../middlewares/auth');
const { createArena, getArenaVendors } = require('../controllers/arenaController');
const { arenaSchema, getVendorSchema } = require('../utils/validators');
const { validate } = require('../middlewares/validate');

const router = express.Router();

router.post('/', auth(['admin']), validate(arenaSchema), createArena);
router.get('/:id/vendors', auth(), validate(getVendorSchema, 'query'), getArenaVendors);

module.exports = router;
