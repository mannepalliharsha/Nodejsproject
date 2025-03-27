const express = require("express");

const router = express.Router();

const { tokenValidation } = require("../../middleware/tokenValidation");

const { delete_controller } = require("../../controllers/org_controller");

router.delete("/", tokenValidation, delete_controller);

module.exports = router;
