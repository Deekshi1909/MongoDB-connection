const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://Deekshu2705:deekshu@myfirstcluster.3mnkfvb.mongodb.net/?appName=MyFirstCluster")
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("MongoDB Atlas Connected Successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
