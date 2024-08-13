const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Ensure the name field is required
  },

  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) { // Only hash if the password has changed
    this.password = await bcrypt.hash(this.password, 12);
  }
  next(); // Call next to proceed to the save operation
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel; 