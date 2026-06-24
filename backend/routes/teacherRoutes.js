const express = require('express');
const router = express.Router();
const { submitAttendance } = require('../controllers/teacherController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
router.post('/attendance', protect, authorizeRoles('teacher'), submitAttendance);
module.exports = router;
