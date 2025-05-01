const express = require('express');
const { signup, login, getUserProfile, updateUserProfile, fetchJobs, uploadResume } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload'); // assuming you saved multer config here
const QRCode = require('qrcode');


const router = express.Router();

// const QRCode = require('qrcode');

router.get('/api/auth/qrcode/:id', async (req, res) => {
  const userId = req.params.id;
  const profileURL = `https://profile-hosting-kappa.vercel.app/?id=${userId}`;

  try {
    const qrImage = await QRCode.toDataURL(profileURL);
    res.json({ qrCode: qrImage, url: profileURL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating QR code' });
  }
});

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUserProfile', protect, getUserProfile);
router.put('/updateUserProfile', protect, updateUserProfile);

// ✅ Corrected and added multer
router.put('/uploadResume', protect, upload.single('resume'), uploadResume);

router.get('/fetchJobs', protect, fetchJobs);

module.exports = router;
