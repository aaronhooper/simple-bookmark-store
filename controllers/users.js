const { body } = require('express-validator');
const User = require('../models/user');

const validate = function () {
    return [
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
    ];
};

module.exports = {
    validate,
};
