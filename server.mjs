import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './src/db.cjs';
import authRoute from './routes/AuthRoute.cjs';
import UserModel from './models/User.cjs';

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
      return res.json({message:"login sucessful"});
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
