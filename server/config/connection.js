const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

const connection = mongoose.connection;

connection.on("error", (error) => {
  console.error("Error connecting to the database:", error.message);
});

connection.once("open", () => {
  console.log("Connected to the database.");
});

module.exports = connection;
