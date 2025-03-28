const express = require("express");
const { deleteUser } = require("../../controllers/user_controller");
const router = express.Router();
const { tokenValidation } = require("../../middleware/tokenValidation");
router.delete("/", tokenValidation, deleteUser);

module.exports = router;
