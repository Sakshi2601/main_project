const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, getProfile, logoutUser, updateProfile, upload} = require('../controllers/authControllers')

// middleware
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logoutUser);
router.put('/profile', updateProfile);
router.put('/profile', upload.single('profilePicture'), updateProfile);

module.exports = router