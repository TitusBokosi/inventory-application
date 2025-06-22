require("dotenv").config();
const express = require("express");
const { body, validationResult } = require("express-validator");
const categoriesRouter = require("./routes/categoriesRoutes");
const CustomError = require("./errors/customErrors");
const path = require("path");
const { getAllProduct } = require("./controllers/indexController");
const { itemsRouter } = require("./routes/itemsRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", getAllProduct);

app.use("/category", categoriesRouter);
app.use("/items", itemsRouter);
app.use((req, res) => {
  throw new CustomError("the page you requested can not be found");
});
app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(`error: ${err.message}`);
  }
  console.log(err);
  res.status(500).send("internal server error, please try again later");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
