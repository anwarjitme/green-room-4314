require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());

const userRouter = require("./features/Users/user.route");

const connection = require("./config/db");
connection();

app.use("/users", userRouter);

//Listening to the Server in 8080 port
app.listen(port, () => {
  console.log(`Listening to the http://localhost:${port}`);
});
