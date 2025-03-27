const express = require("express");

const router = express.Router();

const { updateUser } = require("../../controllers/user_controller");

router.put("/", updateUser);

module.exports = router;
