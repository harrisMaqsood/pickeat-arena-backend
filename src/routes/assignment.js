const express = require('express');
const { auth } = require('../middlewares/auth');
const { createAssignment } = require('../controllers/assignmentController');

const router = express.Router();

router.post('/', auth(['admin']), createAssignment);

module.exports = router;
