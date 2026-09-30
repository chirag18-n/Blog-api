const express = require("express");
const connectDB = require("./config/dbConfig.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "blog-api",
  });
});

app.use("/api/blog", require("./routes/blogRoute.js"));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Server startup failed:", error);
  });
