var express = require("express");
var router = express.Router();
var db = require("../models");


module.export = function(router) {
// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.burger.findAll({}).then(function(dbburger) {
    res.json(dbburger);
  // burger.all(function(burgerData) {
    // res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  // burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    db.burger.create({
      burger_name: req.body.burger_name,
      eaten : req.body.eaten,
    }).then(function(dbburger){
      res.json(dbburger);
    // })
    // console.log(result);
    // res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  // burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    db.burger.update({
      burger_name: req.body.burger_name,
      eaten: req.body.eaten
    }).then(function(dbburger){
      res.json(dbburger);
    // })

    // console.log(result);
    // res.redirect("/");
  });
});

}
