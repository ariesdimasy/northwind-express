const model = require("./../models");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const employeeController = {};

dotenv.config();

employeeController.login = async (req, res, next) => {
  const { email, password } = req.body;
  //   console.log(email, password);

  try {
    const getUser = await model.employee.findOne({
      where: {
        email_address: email,
      },
    });
    //const getUser = await model.employee.findAll();
    // console.log("getUser => ", getUser);
    const match = await bcrypt.compare(password, getUser.password);
    if (!match) {
      return res.status(400).json({ message: "Wrong Password" });
    } else {
      const accessToken = jwt.sign(
        {
          id: getUser.id,
          first_name: getUser.first_name,
          email_address: getUser.email_address,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.json({
        accessToken: accessToken,
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

employeeController.register = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      company,
      email_address,
      password,
      password_confirm,
      job_title,
      business_phone,
      home_phone,
      mobile_phone,
      address,
      city,
      state_province,
      zip_postal_code,
      country_region,
      web_page,
      notes,
    } = req.body;

    if (password !== password_confirm) {
      return res.status(400).json({
        message: "password and password_confirm must same",
      });
    }

    const newData = model.employee.create({
      first_name,
      last_name,
      company,
      email_address,
      password,
      password_confirm,
      job_title,
      business_phone,
      home_phone,
      mobile_phone,
      address,
      city,
      state_province,
      zip_postal_code,
      country_region,
      web_page,
      notes,
    });

    if (newData) {
      res.status(200).json({
        message: "new employee data is created",
      });
    } else {
      res.status(400).json({
        message: "error",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

module.exports = employeeController;
