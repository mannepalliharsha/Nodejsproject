const express = require("express");
const signup = require("./signup");
const signin = require("./signin");
const updatebyid = require("./updateUserbyid");
const deletebyid = require("./deleteUserbyid");
const getUserid = require("./getUserbyid");
const router = express.Router();

router.use("/signup", signup);

router.use("/signin", signin);

router.use("/updateuserid", updatebyid);

router.use("/deleteuserid", deletebyid);

router.use("/getuserid", getUserid);
module.exports = router;
