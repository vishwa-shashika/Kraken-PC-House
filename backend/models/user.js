const mongoose = require("mongoose");
const { reset } = require("nodemon");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [50, "Name Cannot Exceed 50 Characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email"],
  },

  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [6, "Password Must be at Least 6 Characters"],
    select: false,
  },

  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  role: {
    type: String,
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  resetPasswordToken: String,
  resetPasswordExpire: String,
});

module.exports = mongoose.model("User", userSchema);
