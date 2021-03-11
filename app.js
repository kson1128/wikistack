const express = require("express");
const app = express();
const morgan = require("morgan");
const mainPage = require("./views/layout.js");
const { db, Page, User } = require("./models");
const wikiRoutes = require("./routes/wiki");
const usersRoutes = require("./routes/users");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use("/wiki", wikiRoutes);
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send(mainPage(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
