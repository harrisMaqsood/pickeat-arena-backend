const express = require('express');
const { auth } = require('../middlewares/auth');
const { createArena, getArenaVendors } = require('../controllers/arenaController');

const router = express.Router();

router.post('/', auth(['admin']), createArena);
router.get('/:id/vendors', auth(), getArenaVendors);

module.exports = router;
