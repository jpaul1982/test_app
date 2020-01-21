const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
let bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/index_b", (req, res) => {
    res.render("index_b");
  });

  app.listen(PORT, () => {
    console.log("Test App is listening on PORT:", PORT);
  });