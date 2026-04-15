const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

//Express Middleware to handle JSON data.
app.use(express.json());

//Create
app.post("/signup", async (req, res) => {
  //Creating a new instance of user model.
  //Static Method.
  // const user = new User({
  //   firstName: "Saksham",
  //   lastName: "Kothari",
  //   gender: "Male",
  // });
  //Dynamic Method.
  // const user = new User(req.body);
  // try {
  //   await user.save();
  //   //sending back the response.
  //   res.send("User Added successfuly.");
  // } catch (err) {
  //   res.status(400).send("Error saving the user: " + err.message);
  // }
});

//Read.
//---First get one user.
app.get("/user", async (req, res) => {
  const userFirstName = req.body.firstName;

  try {
    const user = await User.find({ firstName: userFirstName });
    if (user.length === 0) {
      res.status(404).send("User Not found");
    } else res.send(user);
  } catch (err) {
    req.statusCode(400).send("Something went wrong...");
  }
});

//Feed API  Get feed /feed - get all the users from the database.
//---to get multiple
app.get("/feed", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    req.statusCode(400).send("Something went wrong...");
  }
});

//Update Data  of a  user.
app.patch("/user", async (req, res) => {
  const data = req.body;
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("user updated succesfully.");
  } catch (err) {
    res.status(404).send("Something went wrong...");
  }
});

//Delete API.
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User Deleted successfully.");
  } catch (err) {
    res.statusCode(404).send("Something went wrong...");
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
