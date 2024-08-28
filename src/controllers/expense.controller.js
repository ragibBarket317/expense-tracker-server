const Expense = require("../models/expense.model.js");

const addExpense = async (req, res) => {
  try {
    const { amount, name, description, date } = req.body;
    console.log({ amount, name, description, date });

    const newExpense = new Expense({
      user: req.user._id,
      amount,
      name,
      description,
      date,
    });
    const saveExpense = await newExpense.save();
    res.status(201).json(saveExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpense = async (req, res) => {
  try {
    const expense = await Expense.find({ user: req.user._id });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpense };
