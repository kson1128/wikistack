const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage.js");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    res.send("Hi Im in /UsersLand~ ;)");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send("form");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res) => {
  res.send(addPage());
});
