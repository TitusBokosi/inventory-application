const { getAllProducts } = require("../module/queries");
const CustomError = require("../errors/customErrors");

async function getAllProduct(req, res) {
  const rows = await getAllProducts();
  console.log(rows);
  res.render("index", { products: rows });
}
module.exports = {
  getAllProduct,
};
