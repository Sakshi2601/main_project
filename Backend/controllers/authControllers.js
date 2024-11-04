const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const test = (req, res) => {
  res.json('test is workng')
}

//Register endpoint
const registerUser = async (req, res) => {
  try{
    const {name, email, password} = req.body;
    // check
    if(!name) {
      return res.json({
        error: 'name is required'
      })
    };

    if(!password || password.length < 6) {
      return res.json({
        error: 'password is required and should be at least 6 characters long'
      })
    };

    const exist = await User.findOne({email});
    if(exist) {
      return res.json({
        error: 'Email is taken already'
      })
    }

    const hashedPassword = await hashPassword(password)

    const user = await User.create({
      name, 
      email, 
      password: hashedPassword
    })

    return res.json(user)
  } 
  catch (error) {
    console.log(error)
  }
}

// Login endpoint
const loginUser = async (req, res) => {
  try{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) {
      return res.json({
        error: 'No user found'
      })
    }
    const match = await comparePassword(password, user.password)
    if(match) {
      jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
        if(err) throw err;
        res.cookie('token', token).json(user)
      })
    } 
    if(!match) {
      res.json({
        error: 'Passwords do not match'
      })
    }
  } catch(error) {
    console.log(error)
  }
}

const getProfile = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, data) => {
      if (err) throw err;
      const user = await User.findById(data.id);
      res.json(user); // Send user profile data to frontend
    });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};


// Logout endpoint
const logoutUser = (req, res) => {
  res.cookie('token', '', { maxAge: 0 }).json({ message: 'Logged out successfully' });
};

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with a timestamp
  },
});

const upload = multer({ storage });

// Update user profile including the profile picture
const updateProfile = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, data) => {
      if (err) throw err;
      const { name, dateOfBirth, interests, about } = req.body;

      let updatedData = { name, dateOfBirth, interests, about };

      // Check if a file was uploaded
      if (req.file) {
        updatedData.profilePicture = req.file.filename; // Save the filename in the DB
      }

      // Update the user's profile in the database
      const updatedUser = await User.findByIdAndUpdate(
        data.id,
        updatedData,
        { new: true }
      );
      res.json(updatedUser); // Send the updated user data
    });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};


module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  upload,
  updateProfile
}