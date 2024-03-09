const express = require("express");
const cors = require("cors")
const connection = require("./config/connection");
require("dotenv").config();

const port = process.env.PORT || 8080;
const userRoute = require("./routes/user.route")
const restaurantRoute = require("./routes/restaurant.route")
const orderRoute = require("./routes/order.route")
const menuRoute = require("./routes/menu.route");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoute)
app.use("/api/restaurant", restaurantRoute)
app.use("/api/order", orderRoute)
app.use("/api/menu", menuRoute)

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on ${port}.`);
  } catch (error) {
    console.error(error.message);
  }
});
