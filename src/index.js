const { app } = require("./app.js");
const dotenv = require("dotenv");

const connectDB = require("./db/database.js");

dotenv.config();
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
