var express = require('express');
var passport = require('passport');
var router = express.Router();

const bookmarks = require('../controllers/bookmarks');
const { ensureAuthenticated } = require('../helpers');

router.all('/', ensureAuthenticated);

router.post('/', bookmarks.create, function (req, res) {
    res.redirect('/bookmarks');
});
router.get('/', bookmarks.readAll);
router.get('/:id', bookmarks.readOne);

module.exports = router;
