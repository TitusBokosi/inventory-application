const { Router } = require("express");
const {
  getAllItems,
  getAllcategory,
  createNewItem,
} = require("../controllers/itemsController");
const itemsRouter = Router();

itemsRouter.get("/", getAllItems);
itemsRouter.get("/new", getAllcategory);
itemsRouter.post("/new", createNewItem);

module.exports = {
  itemsRouter,
};
