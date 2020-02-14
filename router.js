var express = require("express");
var router = express.Router();

var usersRouter = require("./components/users/routes");
var bookmarksRouter = require("./components/bookmarks/routes");
var authRouter = require("./components/auth/routes");

router.use("/", authRouter);
router.use("/users", usersRouter);
router.use("/bookmarks", bookmarksRouter);

router.get("/", function(req, res, next) {
  res.redirect("/bookmarks");
});

module.exports = router;
