const express = require("express");
const { find } = require("../../controllers/user_controller");
const router = express.Router();

router.post("/", find);

module.exports = router;
