const express = require('express');
const { auth } = require('../middlewares/auth');
const { createAssignment } = require('../controllers/assignmentController');
const { assignmentSchema } = require('../utils/validators');
const { validate } = require('../middlewares/validate');

const router = express.Router();

router.post('/', auth(['admin']), validate(assignmentSchema), createAssignment);

module.exports = router;
