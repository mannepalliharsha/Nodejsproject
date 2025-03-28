const express = require("express");

const router = express.Router();

const { get_controller } = require("../../controllers/team_controller");

const { teamValidation } = require("../../middleware/teamvalidate");

router.get("/:id", teamValidation, get_controller);

module.exports = router;
