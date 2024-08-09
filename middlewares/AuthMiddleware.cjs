require("dotenv").config();
const User = require("../models/User.cjs");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);

    if (user) {
      return res.status(200).json({ status: true, user: user.username });
    } else {
      return res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (err) {
    return res.status(403).json({ status: false, message: "Invalid token" });
  }
};
