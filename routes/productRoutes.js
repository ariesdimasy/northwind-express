const express = require("express");
const router = express.Router();

const controller = require("./../controllers");

router.get("/", controller.productController.getAll);
router.post("/", controller.productController.insert);
router.get("/:id", controller.productController.getById);
router.put("/:id", controller.productController.update);
router.delete("/:id", controller.productController.delete);

module.exports = router;
