const express = require("express");
const app = express();

const routes = require("./routes");

// global API
app.use((req, res, next) => {
  console.log({
    code: 200,
    message: "RESTfull northwind API",
  });
  next();
});
app.use(express.json()); // <==== INI FENTING

// router module
app.use("/product", routes.productRoute);

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
