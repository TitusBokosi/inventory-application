const { get } = require("../routes/categoriesRoutes");
const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}
async function getAllProducts() {
  const { rows } = await pool.query(
    "SELECT * FROM products JOIN category ON products.category_id = category.category_id "
  );
  return rows;
}
async function getCategoryById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM category WHERE category_id = $1",
    [id]
  );
  return rows[0].name;
}
async function getProductById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM products JOIN category ON products.category_id = category.category_id WHERE product_id = $1",
    [id]
  );
  console.log(rows);
  return rows[0];
}
module.exports = {
  getAllCategories,
  getAllProducts,
  getCategoryById,
  getProductById,
};
