const express = require("express");
const errorMiddleware = require("./middlewares/errors");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

//Setting up the config file (node /backend/server.js) ONLY WOKS WHEN RUNING FROM ROOT DIR
dotenv.config({ path: "./backend/config/config.env" });

//Middlewares
app.use(express.json());
app.use(cookieParser());

//Import All Routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");
const payment = require("./routes/payment");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
