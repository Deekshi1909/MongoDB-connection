const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();  

const app = express();


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("MongoDB Atlas Connected Successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
