const { Pool } = require("pg");
const dbConfig = require("../config/database");

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

module.exports = new Pool(config);
