const express = require("express");
const app = express();

//Middlewares
app.use(express.json());

//Import All Routes
const products = require("./routes/product");

app.use("/api/v1", products);

module.exports = app;
