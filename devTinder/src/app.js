const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //Creating a new instance of user model.
  const user = new User({
    firstName: "Saksham",
    lastName: "Kothari",
    gender: "Male",
  });

  try {
    await user.save();
    //sending back the response.
    res.send("User Added successfuly.");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

connectDB()
  .then(() => {
    app.listen(7777, () => {
      console.log("Database connected successfully.");
      console.log("Server is successfully listning to 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected.");
  });
