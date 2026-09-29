const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requierd: true,
    },
    description: {
      type: String,
      requierd: true,
    },
    author: { type: String, requierd: true },
    isPublished: { type: Boolean, requierd: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Blog", blogSchema);
