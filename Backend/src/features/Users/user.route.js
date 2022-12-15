const express = require("express");
const User = require("./user.model");
const Router = express.Router();

Router.post("/signup", async (req, res) => {
  const {
    email,
    password,
    first_name,
    last_name,
    phone_number,
    company_name,
    website_URL,
    employees,
    avtar,
  } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(404).send("Connot create an user with exist");
    } else {
      let user = await User.create({
        email,
        password,
        first_name,
        last_name,
        phone_number,
        company_name,
        website_URL,
        employees,
        avtar,
      });
      if (user) {
        res.send("Sign-Up Successfully!");
      }
    }
  } catch (error) {
    res.status(404).send(e.massege);
  }
});

Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.send({ token: `${user._id}:${user.first_name}`, user });
      } else {
        res.status(404).send("you are not user or incorrect password");
      }
    } else {
      res.status(404).send(`user this${email} not found`);
    }
  } catch (error) {
    res.status(404).send(error.massege);
  }
});

module.exports = Router;
