const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB database: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    // End the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
