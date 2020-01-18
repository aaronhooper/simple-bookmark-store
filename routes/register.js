var express = require('express');
var router = express.Router();

var users = require('../controllers/users');

router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/',
    users.validate(),
    users.create,
    (req, res) => res.redirect('/bookmarks')
);

module.exports = router;
