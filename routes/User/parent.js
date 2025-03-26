const express = require("express");
const signup = require("./signup");
const signin = require("./signin");
const router = express.Router();

router.use("/signup", signup);

router.use("/signin", signin);
module.exports = router;
