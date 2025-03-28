const express = require("express");

const router = express.Router();

const org = require("./create_org");
const update = require("./updatebyuserid");
const remove = require("./deletebyorgid");
const getorg = require("./getOrgbyid");

router.use("/create", org);
router.use("/updatebyorgid", update);

router.use("/deleteorgid", remove);
router.use("/getorgid", getorg);

module.exports = router;
