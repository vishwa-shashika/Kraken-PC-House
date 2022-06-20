const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

//Setting up the config file (node /backend/server.js) ONLY WOKS WHEN RUNING FROM ROOT DIR
dotenv.config({ path: "./backend/config/config.env" });

//Connecting to Database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server Started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
