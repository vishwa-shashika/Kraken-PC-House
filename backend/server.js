const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

//Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting Down Server Due to Uncaught Exception");
  process.exit(1);
});

//Setting up the config file (node /backend/server.js) ONLY WOKS WHEN RUNING FROM ROOT DIR
dotenv.config({ path: "./backend/config/config.env" });

//Connecting to Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Sutting Down Server Due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
