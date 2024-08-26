const Income = require("../models/income.model.js");

const addIncome = async (req, res) => {
  try {
    const { amount, source, date } = req.body;

    const newIncome = new Income({
      amount,
      source,
      date,
    });
    const saveIncome = await newIncome.save();
    res.status(201).json(saveIncome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getIncome = async (req, res) => {
  try {
    const incomes = await Income.find({});
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addIncome, getIncome };
