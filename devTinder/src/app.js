const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("HAHAH");
});

//.get will match only get calls.
app.get("/user", (req, res) => {
  res.send({ firstName: "Saksham", lastName: "Kothari" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to the database.");
});

app.delete("/user", (req, res) => {
  res.send("User Deleted Successfully.");
});

//Handling the req.
app.use("/test", (req, res) => {
  //use will match all the http method apo calls to test
  res.send("Test route working");
});

//Starting the server.
app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
}); //give port to host.
