const express = require("express");

const router = express.Router();
const { delete_controller } = require("../../controllers/team_controller");
const { teamValidation } = require("../../middleware/teamvalidate");

router.delete("/", teamValidation, delete_controller);

module.exports = router;
