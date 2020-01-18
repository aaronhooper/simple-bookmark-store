const { body, validationResult } = require('express-validator');
const User = require('../models/user');

const validate = function () {
    return [
        body('firstName')
            .notEmpty(),

        body('username', 'Username must be between 3 and 15 characters.')
            .notEmpty()
            .isLength({ min: 3, max: 15 }),

        body('password', 'Password must be between 8 and 32 characters.')
            .notEmpty()
            .isLength({ min: 8, max: 32 }),

        body('confirmPassword', 'Password fields must match.')
            .notEmpty()
            .custom((value, { req }) => value === req.body.password),
    ];
};

const create = async function (req, res, next) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        const user = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            password: req.body.password,
        });

        try {
            await user.save();
            next();
        } catch (e) {
            next(e);
        }
    } else {
        res.render('register', { result });
    }
}

module.exports = {
    validate,
    create,
};
