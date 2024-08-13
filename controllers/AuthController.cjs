const bcrypt = require('bcrypt');
const User = require('../models/User.cjs'); // Adjust the path to your User model
const { createSecretToken } = require('../util/SecretToken.cjs'); 
const jwt = require("jsonwebtoken");


module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true })
  } catch (error) {
    console.error(error);
  }
}


module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create a new user
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    // Sign the JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_KEY, { expiresIn: '1h' });
    res.cookie("token", token, { httpOnly: true, withCredentials: true });

    return res.status(201).json({ message: "User created successfully", success: true });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
