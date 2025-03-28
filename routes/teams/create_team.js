const express = require("express");

const router = express.Router();
const { create_controller } = require("../../controllers/team_controller");
const { tokenValidation } = require("../../middleware/tokenValidation");

router.post("/", tokenValidation, create_controller);

module.exports = router;
