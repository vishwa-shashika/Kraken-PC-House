const Product = require("../models/product");

//Create New Product => api/vi/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
  });
};

exports.getProducts = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, messege: "This Route will show all products" });
};
