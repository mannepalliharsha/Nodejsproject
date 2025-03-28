const express = require("express");

const router = express.Router();

const { update_controller } = require("../../controllers/team_controller");

const { teamValidation } = require("../../middleware/teamvalidate");

router.put("/", teamValidation, update_controller);

module.exports = router;
