const express = require("express");
const controller = require("../controller/disciplina.controller");
const validateToken = require("../middleware/validateToken");
const upload = require("../utils/multerUpload");

const router = express.Router();

router.route("/")
  .get(validateToken, controller.getAll)
  .post(validateToken, controller.create);

router.route("/:id")
  .get(validateToken, controller.getOne)
  .put(validateToken, controller.updateOne)
  .delete(validateToken, controller.deleteOne);

module.exports = router;