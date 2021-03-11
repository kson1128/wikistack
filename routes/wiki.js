const express = require("express");
const router = express.Router();
const  addPage  = require("../views/addPage.js");

module.exports = router;


//GET /wiki
router.get("/", async (req, res, next) => {
  try {
    res.send("Hi Im in /WikiLand~ ;)");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {

    console.log('REQ.BODY--', req.body)
    res.json(req.body);
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res) => {
  res.send(addPage());
});
