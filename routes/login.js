var express = require('express');
var router = express.Router();

var users = require('../controllers/users');

router.get('/', function(req, res, next) {
    res.render('login');
});

module.exports = router;
