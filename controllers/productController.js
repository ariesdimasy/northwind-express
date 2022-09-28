const model = require("./../models/index");
const controller = {};

controller.getAll = async function (req, res, next) {
  try {
    await model.product.findAll().then((result) => {
      var message = "No Data";
      if (result.length > 0) {
        message = result.length + " data products fetch";
      }

      res.status(200).json({
        message: message,
        data: result,
      });
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

controller.getById = async function (req, res, next) {
  try {
    await model.product.findByPk(req.params.id).then((result) => {
      var message = "No Data";
      if (result) {
        message = "1 data product fetch";
      }

      res.status(200).json({
        message: message,
        data: result,
      });
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

controller.insert = async function (req, res, next) {
  try {
    const {
      supplier_ids,
      product_code,
      product_name,
      description,
      standard_cost,
      list_price,
      reorder_level,
      target_level,
      quantity_per_unit,
      discontinued,
      minimum_reorder_quantity,
      category,
    } = req.body;

    const newData = await model.product.create({
      supplier_ids,
      product_code,
      product_name,
      description,
      standard_cost,
      list_price,
      reorder_level,
      target_level,
      quantity_per_unit,
      discontinued,
      minimum_reorder_quantity,
      category,
    });

    var message = "Error";
    if (newData) {
      message = "product ID = " + newData.id + " inserted";
    }

    res.status(200).json({
      message: message,
    });
  } catch (err) {
    res.status(404).json({
      foo: "bar",
      message: err,
    });
  }
};

controller.update = async (req, res, next) => {
  try {
    const {
      supplier_ids,
      product_code,
      product_name,
      description,
      standard_cost,
      list_price,
      reorder_level,
      target_level,
      quantity_per_unit,
      discontinued,
      minimum_reorder_quantity,
      category,
    } = req.body;

    const newData = await model.product.update(
      {
        supplier_ids,
        product_code,
        product_name,
        description,
        standard_cost,
        list_price,
        reorder_level,
        target_level,
        quantity_per_unit,
        discontinued,
        minimum_reorder_quantity,
        category,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    var message = "Error";
    if (newData) {
      message = "product ID = " + JSON.stringify(newData) + " Updated";
    }

    console.log(newData);

    res.status(200).json({
      message: message,
    });
  } catch (err) {
    res.status(404).json({
      foo: "bar",
      message: err,
    });
  }
};

controller.delete = async (req, res, next) => {
  try {
    await model.product
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        var message = "No Data";
        if (result) {
          message = "1 data product deleted";
        }

        res.status(200).json({
          message: message,
          data: result,
        });
      });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

module.exports = controller;
