const express = require("express");
const cors = require("cors");
const incomeRouter = require("./routes/income.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", incomeRouter);

module.exports = { app };
