exports.getProducts = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, messege: "This Route will show all products" });
};
