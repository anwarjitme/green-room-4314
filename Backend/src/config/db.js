const mongoose = require("mongoose");
const url =
  process.env.DATABASE_URL ||
  `mongodb+srv://akshay:akshay@cluster0.p3ktkxt.mongodb.net/test`;

const connection = () => {
  mongoose
    .connect(`${url}green-room-4314`)
    .then(() => {
      console.log("Connection Successful!");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connection;
