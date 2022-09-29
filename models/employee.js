const Sequelize = require("sequelize");
const db = require("../configs/database/mysql");

const employee = db.define(
  "employee",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [5, 50],
      },
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [5, 50],
        isNumeric: false,
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [5, 50],
        isNumeric: false,
      },
    },
    email_address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    job_title: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 50],
      },
    },
    business_phone: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    home_phone: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    mobile_phone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [5, 50],
      },
    },
    state_province: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [5, 50],
      },
    },
    zip_postal_code: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [5, 50],
      },
    },
    country_region: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [5, 50],
      },
    },
    web_page: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    notes: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = employee;
