var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var bookmarksRouter = require('./bookmarks');

router.use('/users', usersRouter);
router.use('/bookmarks', bookmarksRouter);

router.get('/', function(req, res, next) {
    res.redirect('/bookmarks');
});

module.exports = router;
