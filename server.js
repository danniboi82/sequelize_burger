var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./models")
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

// app.use("/", routes);


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
  });
});
