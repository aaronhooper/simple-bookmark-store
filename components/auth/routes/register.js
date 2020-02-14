var express = require("express");
var router = express.Router();

var users = require("../../users/usersController");

router.get("/", function(req, res, next) {
  res.render("auth/register");
});

router.post("/", users.validate(), users.create, (req, res) =>
  res.redirect("/bookmarks")
);

module.exports = router;
