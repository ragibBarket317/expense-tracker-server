const express = require("express");
const {
  addExpense,
  getExpense,
} = require("../controllers/expense.controller.js");
const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.route("/addExpense").post(protect, addExpense);
router.route("/getExpense").get(protect, getExpense);

module.exports = router;
