const asyncHandler = require("express-async-handler");
const CustomError = require("../errors/customErrors");
const { getAllCategories, getProductById } = require("../module/queries");

const getItemById = asyncHandler(async (req, res) => {
  const product = await getProductById(req.params.item);
  if (!product) {
    throw new CustomError("can not find product " + req.params.item);
  }
  res.render("product", { product: product });
});

const getAllCategory = asyncHandler(async (req, res) => {
  const categories = await getAllCategories();
  if (!categories || categories.length === 0) {
    throw new CustomError(`can not find category ${req.params.categoryId}`);
  }
  console.log(categories);
  res.send(`all categories will be viewed here: ${categories}`);
});
// async function getCategoryById (req, res){
//     const {categoryId} = req. params;
//     const category = await; //get category from database
//     if(!category){
//         throw new CustomError(`can not find category ${categoryId}`);
//     }
//     res.send (`you are viewing the ${categoryId} category`);
// }
module.exports = {
  getAllCategory,
  getItemById,
};
