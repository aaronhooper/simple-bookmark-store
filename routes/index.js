var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var bookmarksRouter = require('./bookmarks');
var registerRouter = require('./register');

router.use('/users', usersRouter);
router.use('/bookmarks', bookmarksRouter);
router.use('/register', registerRouter);

router.get('/', function(req, res, next) {
    res.redirect('/bookmarks');
});

module.exports = router;
