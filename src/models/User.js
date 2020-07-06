const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    require: true,
    min: 10,
    max: 20,
  },
  password: {
    type: String,
    require: true,
    max: 2000,
    min: 8,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  refreshToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
