var express = require('express');
var router = express.Router();
var { validationResult } = require('express-validator');

var users = require('../controllers/users');

router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', users.validate(), function (req, res, next) {
    const result = validationResult(req);
    
    if (result.isEmpty()) {
        res.send('Add the user to the database!');
    } else {
        console.log(result);
        res.render('register', { result });
    }
});

module.exports = router;
