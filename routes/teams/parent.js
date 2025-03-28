const express = require("express");

const router = express.Router();

const createTeam = require("./create_team");
const updateTeam = require("./updateteam");

const deleteTeam = require("./delete_team");

const getTeam = require("./getTeam");

router.use("/create", createTeam);

router.use("/update", updateTeam);

router.use("/delete", deleteTeam);

router.use("/get", getTeam);

module.exports = router;
