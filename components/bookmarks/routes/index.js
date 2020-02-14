var { join } = require("path");
var express = require("express");
var router = express.Router();

const bookmarks = require("../bookmarksController");
const { ensureAuthenticated } = require("../../../helpers");

router.post("/", ensureAuthenticated, bookmarks.create, function(req, res) {
  res.redirect("/bookmarks");
});
router.get("/", ensureAuthenticated, bookmarks.readAll);
router.get("/:id", ensureAuthenticated, bookmarks.readOne);

router.get("/:id/delete", ensureAuthenticated, bookmarks.delete, (req, res) =>
  res.redirect("/bookmarks")
);

module.exports = router;
