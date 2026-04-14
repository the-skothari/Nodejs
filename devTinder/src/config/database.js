const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sakshamkothari:pass@cluster0.vdndncp.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
