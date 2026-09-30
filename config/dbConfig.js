const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log("DB CONNECTION SUCCESS:", conn.connection.name);
  } catch (error) {
    console.error("DB CONNECTION FAILED:");
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
