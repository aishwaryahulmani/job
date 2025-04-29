const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/auth/signup
exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // Create JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserProfile = async (req, res) => {
    console.log("GET /getUserProfile route hit");
    console.log(req.user);
    
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
// console.log('Decoded JWT:', decoded);  // Log the decoded token to check if the ID is correct.
  try {
    const user = await User.findById(req.user._id).select("-password")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
  } catch (error) {
    console.error("Error fetching user profile:", error.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Update user profile
// @route   PUT /api/auth/updateUserProfile
exports.updateUserProfile = async (req, res) => {
    const { firstName, lastName, email, phone, location, summary } = req.body;
  
    try {
      // Find the user by ID (which comes from the protected route)
      const user = await User.findById(req.user._id);  // Use req.user._id, as it's set by the middleware
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update user fields with new data
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.phone = phone || user.phone;
      user.location = location || user.location;
      user.bio = summary || user.summary;
  
      // Save the updated user
      await user.save();
  
      res.json({
        message: "User profile updated successfully",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          location: user.location,
          bio: user.bio
        }
      });
    } catch (error) {
      console.error("Error updating user profile:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  };
  

