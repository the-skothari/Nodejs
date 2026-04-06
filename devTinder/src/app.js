const express = require("express");

const app = express();

//Handling the req.
app.use("/test", (req, res) => {
  res.send("Test route working");
});

app.use("/hello", (req, res) => {
  res.send("Welcome to hello.");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
}); //give port to host.
