const express = require('express');
// const { protect } = require("../middleware/authMiddleware")
const { signup, login,getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
// C:\Users\Aishwarya\Downloads\job-scraper-ai\backend\middleware\authMiddleware.js

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUserProfile', protect, getUserProfile)


module.exports = router;
