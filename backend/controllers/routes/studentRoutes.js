const express = require('express');
const router = express.Router();
const { getStudentPrediction } = require('../controllers/studentController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/predict', protect, authorizeRoles('student'), getStudentPrediction);

module.exports = router;