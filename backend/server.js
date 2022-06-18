const dotenv = require("dotenv");
const app = require("./app");

//Setting up the config file (node /backend/server.js) ONLY WOKS WHEN RUNING FROM ROOT DIR
dotenv.config({ path: "./backend/config/config.env" });

console.log("process.env.PORT = ", process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log(
    `Server Started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
