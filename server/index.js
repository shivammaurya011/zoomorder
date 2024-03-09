const express = require("express");
const connection = require("./config/connection");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on ${port}.`);
  } catch (error) {
    console.error(error.message);
  }
});
