const express = require("express");
const verifyToken = require("./../middleware/verifyToken");
const router = express.Router();

const controller = require("./../controllers");

router.get("/", controller.productController.getAll);
router.post("/", verifyToken, controller.productController.insert);
router.get("/:id", verifyToken, controller.productController.getById);
router.put("/:id", verifyToken, controller.productController.update);
router.delete("/:id", verifyToken, controller.productController.delete);

module.exports = router;
