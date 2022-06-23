const express = require("express");
const errorMiddleware = require("./middlewares/errors");
const app = express();
const cookieParser = require("cookie-parser");

//Middlewares
app.use(express.json());
app.use(cookieParser());

//Import All Routes
const products = require("./routes/product");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", auth);

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
