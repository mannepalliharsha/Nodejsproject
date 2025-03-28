const express = require("express");

const router = express.Router();


const { delete_controller } = require("../../controllers/org_controller");

const { orgValidate } = require("../../middleware/orgValidate");

router.delete("/", orgValidate, delete_controller);

module.exports = router;
