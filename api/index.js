const express = require("express");

const config = require("../config");
const app = express();

const user = require("./components/user/network");

// ROUTER
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", user);

// SERVER
app.listen(config.api.port, () => {
  console.log(`Listening http://localhost:${config.api.port}`);
});
