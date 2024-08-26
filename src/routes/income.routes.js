const express = require("express");
const { addIncome, getIncome } = require("../controllers/income.controller.js");

const router = express.Router();

router.route("/addIncome").post(addIncome);
router.route("/getIncome").get(getIncome);

module.exports = router;
