const express = require("express");

const router = express.Router();

const { update_controller } = require("../../controllers/org_controller");

const { tokenValidation } = require("../../middleware/tokenValidation");

router.put("/", tokenValidation, update_controller);

module.exports = router;
