const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./src/db.cjs');
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute.cjs");
const UserModel = require('./models/User.cjs')

dotenv.config();

const dbPassword = process.env.DATABASE_PASSWORD;
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", authRoute);
app.options('*', cors());

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new UserModel({ username, email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const username = user.username;
        console.log(username)
        return username; // Ensure this is correct
      } else {
        return res.json({ success: false, message: "incorrect password" });
      }
    } else {
      return res.json({ success: false, message: "does not exist" });
    }
  } catch (e) {
    return res.status(500).json("Error occurred during login");
  }
});

app.get('/getUsername', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res.json({ success: true, username: user.username });
    } else {
      return res.json({ success: false, message: "User does not exist" });
    }
  } catch (e) {
    return res.status(500).json("Error occurred during fetching username");
  }
});

// Connect to database
connectDB(dbPassword);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
