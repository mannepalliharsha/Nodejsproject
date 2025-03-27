const express = require("express");
const { tokenValidation } = require("../../middleware/tokenValidation");

const { get_controller } = require("../../controllers/org_controller");

const router = express.Router();

router.get("/:id", get_controller);

module.exports = router;
