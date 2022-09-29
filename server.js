const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// global API
app.use((req, res, next) => {
  console.log({
    code: 200,
    message: "RESTfull northwind API",
    dotenv: {
      DB_NAME: process.env.DB_NAME,
    },
  });
  next();
});
//app.use(express.json()); // <==== INI FENTING

// router module
app.use("/product", routes.productRoute);
app.use("/auth", routes.authRoute);

app.get("/", (req, res) => {
  res.send({
    message: "Hello",
  });
});

const port = 4560;
app.listen(port, () => {
  console.log("northwind server run on ", port);
});

module.exports = app;
