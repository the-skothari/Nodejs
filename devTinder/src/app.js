const express = require("express");

const app = express();

// app.use("/admin", (req, res, next) => {
//   const token = "xyz";
//   const admin = token === "xyz";
//   if (!admin) {
//     res.status(401).send("Unauthorised Access.");
//   } else {
//     next();
//   }
// });

//for getData.

//for deleteData

app.get("/userData", (req, res) => {
  //Logic to DB call.

  throw new Error("Error");
  res.send();
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong.");
  }
});

//Starting the server.
app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
}); //give port to host.
