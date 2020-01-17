var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function (req, res, next) {
    const { firstName, username, password, confirmPassword } = req.body;
    const errors = [];

    if (typeof firstName === 'undefined') {
        errors.push({ message: 'First name field must not be empty.' });
    }

    if (typeof username === 'undefined') {
        errors.push({ message: 'Username field must not be empty.' });

    } else if (username.length < 3 || username.length > 15) {
        errors.push({ message: 'Username must be between 3 and 15 characters.' });
    }

    if (typeof password === 'undefined' || typeof confirmPassword === 'undefined') {
        errors.push({ message: 'Password must be entered twice.' });

    } else if (password !== confirmPassword) {
        errors.push({ message: 'Password and confirmed password must match.' });
    
    } else if (password.length < 8 || password.length > 30) {
        errors.push({ message: 'Password must be between 8 and 30 characters.' });
    }
    
    if (!errors.length) {
        res.send('Add the user to the database!');
    } else {
        res.render('register', { errors });
    }

});

module.exports = router;
