const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    avtar: {
      type: String,
      //   default: "https://bit.ly/broken-link",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userScheme);
module.exports = User;
