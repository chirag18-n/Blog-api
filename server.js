// use incase of server is not getting connected to database
//const dns = require ("dns");
//dns.setDefaultResultOrder("ipv4first");
//dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDB = require("./config/dbConfig.js");
require("dotenv").config();

connectDB();
const app = express();
PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({
    message: "blog-api",
  });
});

app.use("/api/blog", require("./routes/blogRoute.js"));

app.listen(PORT, () => console.log("server is running at PORT : ${PORT}"));
