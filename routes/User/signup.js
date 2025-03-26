const express = require("express");

const router = express.Router();

const { addUser } = require("../../controllers/user_controller");
const { validate } = require("../../middleware/userEmailvalidation");
router.use(express.json());

router.post("/", validate, addUser);

module.exports = router;
