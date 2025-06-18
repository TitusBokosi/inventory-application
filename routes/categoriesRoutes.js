const { Router } = require("express");
const {
  getAllCategory,
  getItemById,
} = require("../controllers/categoryControllers");
const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategory);

// categoriesRouter.get("/", (req, res) => {
//   res.send("all categories will be viewed here");
// });

categoriesRouter.get("/:item", getItemById);
module.exports = categoriesRouter;
