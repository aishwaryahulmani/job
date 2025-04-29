// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select('-password');
//       next();
//     } catch (err) {
//       console.error(err);
//       res.status(401).json({ message: 'Not authorized' });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: 'Not authorized, no token' });
//   }
// };

// module.exports = { protect };

const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = async (req, res, next) => {
    console.log("middle eare hit route hit");
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select("-password")
      if (!req.user) {
        return res.status(401).json({ message: "User not found" })
      }
      return next()
    } catch (err) {
      console.error("JWT verification failed:", err.message)
      return res.status(401).json({ message: "Not authorized, token invalid" })
    }
  }

  return res.status(401).json({ message: "Not authorized, no token" })
}

module.exports = { protect }
