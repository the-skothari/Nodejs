const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("constrain string");
};

module.exports = connectDB;
