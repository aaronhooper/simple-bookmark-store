var express = require('express');
var router = express.Router();

/* GET bookmarks listing. */
router.get('/', function(req, res, next) {
  res.render('bookmarks/index');
});

module.exports = router;
