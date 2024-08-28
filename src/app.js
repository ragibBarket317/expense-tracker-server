const express = require("express");
const cors = require("cors");
const incomeRouter = require("./routes/income.routes.js");
const expenseRouter = require("./routes/expense.routes.js");
const userRouter = require("./routes/userAuth.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1", incomeRouter);
app.use("/api/v1", expenseRouter);

module.exports = { app };
