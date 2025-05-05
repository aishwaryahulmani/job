const express = require('express');
const { signup, login, getUserProfile, updateUserProfile, fetchJobs, uploadResume,getPublicUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/upload'); // assuming you saved multer config here
const QRCode = require('qrcode');


const router = express.Router();

// const QRCode = require('qrcode');

router.get('/qrcode/:id', async (req, res) => {
  const userId = req.params.id;
  const profileURL = `https://profile-hosting-green.vercel.app//?id=${userId}`;
  console.log(profileURL);
  

  try {
    const qrImage = await QRCode.toDataURL(profileURL);
    res.json({ qrCode: qrImage, url: profileURL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating QR code' });
  }
});
router.get('/publicUser/:id', getPublicUserProfile);
router.post('/signup', signup);
router.post('/login', login);
router.get('/getUserProfile', protect, getUserProfile);
router.put('/updateUserProfile', protect, updateUserProfile);

// ✅ Corrected and added multer
router.put('/uploadResume', protect, upload.single('resume'), uploadResume);

router.get('/fetchJobs', protect, fetchJobs);

module.exports = router;
