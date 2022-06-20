const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
      console.log(
        `MongoDB Connetion Sucess with HOST : ${con.connection.host}`
      );
    })
    .catch((err) => console.log("Error Connecting to DB"));
};

module.exports = connectDatabase;
