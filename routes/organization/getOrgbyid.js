const express = require("express");

const { get_controller } = require("../../controllers/org_controller");
  const {orgValidate}=require('../../middleware/orgValidate')
  
const router = express.Router();

router.get("/:id", orgValidate, get_controller);

module.exports = router;
