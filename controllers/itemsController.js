const asyncHandler = require("express-async-handler");

const CustomError = require("../errors/customErrors");
const { getAllProducts } = require("../module/queries");

const getAllItems = asyncHandler(async (req, res) => {
  const products = await getAllProducts();
  if (!products || products.length === 0) {
    throw new CustomError("No products found");
  }
  res.render("products", { products: products });
});

module.exports = {
  getAllItems,
};
