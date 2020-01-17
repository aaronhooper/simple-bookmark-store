var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function (req, res, next) {
    const { firstName, username, password, confirmPassword } = req.body;
    const errors = [];

    if (username.length < 3 || username.length > 15) {
        errors.push({ message: 'Username must be between 3 and 15 characters.' });
    }

    if (password !== confirmPassword) {
        errors.push({ message: 'Password and confirmed password must match.' });
    
    } else if (password.length < 8 || password.length > 30) {
        errors.push({ message: 'Password must be between 8 and 30 characters.' });
    }
    
    if (!errors.length) {
        res.send('No errors! All is good :)');
    } else {
        res.render('register', { errors });
    }

});

module.exports = router;
