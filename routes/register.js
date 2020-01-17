var express = require('express');
var router = express.Router();

var {
    body,
    validationResult,

} = require('express-validator');

router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', [
    body('firstName')
        .exists(),

    body('username', 'Username must be between 3 and 15 characters.')
        .exists()
        .isLength({ min: 3, max: 15 }),

    body('password', 'Password must be between 8 and 32 characters.')
        .exists()
        .isLength({ min: 8, max: 32 }),

    body('confirmPassword', 'Password fields must match.')
        .exists()
        .custom((value, { req }) => value === req.body.password),

], function (req, res, next) {
    const result = validationResult(req);
    
    if (result.isEmpty()) {
        res.send('Add the user to the database!');
    } else {
        console.log(result);
        res.render('register', { result });
    }
});

module.exports = router;
