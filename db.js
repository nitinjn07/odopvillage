const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Connected to MongoDB : ");
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error}`);
    process.exit(1);
  }
};

module.exports.mongoDB = mongoDB;
