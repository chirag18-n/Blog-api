const express = require("express");
const {
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  removeBlog,
} = require("../controllers/blogController");

const routes = express.Router();

routes.get("/", getBlogs);
routes.get("/:id", getBlog);
routes.post("/", addBlog);
routes.put("/:id", updateBlog);
routes.delete("/:id", removeBlog);

module.exports = routes;
