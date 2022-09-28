var Sequelize = require("sequelize");
var db = new Sequelize("northwind", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
