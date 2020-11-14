const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extensions: true}));
app.use(express.json());

const exHandles = require("express-handlebars");

app.engine("handlebars", exHandles({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT,() => {
  console.log("Listening PORT: " + PORT);
});