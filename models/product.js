const Sequelize = require("sequelize");
const db = require("../configs/database/mysql");

const product = db.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    product_code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5, 50],
      },
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [10, 50],
      },
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        //isNull: false, // jangan pakai ini
      },
    },
    standard_cost: {
      type: Sequelize.DECIMAL,
      defaultValue: 0.0,
    },
    list_price: {
      type: Sequelize.DECIMAL,
      defaultValue: 0.0,
      allowNull: false,
    },
    reorder_level: Sequelize.INTEGER,
    target_level: Sequelize.INTEGER,
    quantity_per_unit: {
      type: Sequelize.STRING,
      validate: {
        len: [1, 50],
      },
    },
    discontinued: {
      type: Sequelize.TINYINT,
      defaultValue: 0,
      allowNull: false,
    },
    minimum_reorder_quantity: {
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
      validate: {
        len: [2, 50],
      },
    },
    supplier_ids: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = product;
