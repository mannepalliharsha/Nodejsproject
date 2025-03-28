const express = require("express");

const router = express.Router();
const { getUserId } = require("../../controllers/user_controller");

const { tokenValidation } = require("../../middleware/tokenValidation");

router.get("/:id", tokenValidation, getUserId);

module.exports = router;
