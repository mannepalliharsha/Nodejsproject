const express = require("express");

const router = express.Router();
const { getUserId } = require("../../controllers/user_controller");

router.get("/:id", getUserId);

module.exports = router;
