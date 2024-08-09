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
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

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

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Connect to database
connectDB(dbPassword);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
