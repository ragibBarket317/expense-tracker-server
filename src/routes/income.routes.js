const express = require("express");
const { addIncome, getIncome } = require("../controllers/income.controller.js");
const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.route("/addIncome").post(protect, addIncome);
router.route("/getIncome").get(protect, getIncome);

module.exports = router;
