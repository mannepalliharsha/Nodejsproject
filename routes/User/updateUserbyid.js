const express = require("express");

const router = express.Router();

const { updateUser } = require("../../controllers/user_controller");

const { tokenValidation } = require("../../middleware/tokenValidation");

router.put("/", tokenValidation, updateUser);

module.exports = router;
