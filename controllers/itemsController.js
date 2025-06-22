const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const CustomError = require("../errors/customErrors");
const {
  getAllProducts,
  getAllCategories,
  createNewProduct,
} = require("../module/queries");

const getAllItems = asyncHandler(async (req, res) => {
  const products = await getAllProducts();
  if (!products || products.length === 0) {
    throw new CustomError("No products found");
  }
  res.render("products", { products: products });
});

const getAllcategory = asyncHandler(async (req, res) => {
  const categories = await getAllCategories();
  if (!categories || categories.length === 0) {
    console.error("can not get categories");
    throw new CustomError("can not get the categories");
  }
  res.render("newItem", { categories: categories, errors: [] });
});

const validateItemInput = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("price")
    .trim()
    .notEmpty()
    .withMessage("Price is require")
    .isNumeric()
    .withMessage("Invalid entry at price, must be anumber"),
  body("category").trim().notEmpty().withMessage("category is required"),
  body("quantity")
    .trim()
    .notEmpty()
    .withMessage("Quantity is required")
    .isNumeric()
    .withMessage("Inavlid entry at quantity, must be a number"),
];
const createNewItem = [
  validateItemInput,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newItem", {
        categories: await getAllCategories(),
        errors: errors.array(),
      });
    }
    const { name, price, quantity, category } = req.body;
    await createNewProduct(name, price, quantity, category);
    res.redirect("/items");
  }),
];

module.exports = {
  getAllItems,
  getAllcategory,
  createNewItem,
};
