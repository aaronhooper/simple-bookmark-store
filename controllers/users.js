const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const User = require('../models/user');

exports.validate = function () {
    return [
        body('firstName')
            .notEmpty(),

        body('username')
            .notEmpty()
            .isLength({ min: 3, max: 15 })
            .withMessage('Username must be between 3 and 15 characters.'),

        body('password')
            .notEmpty()
            .isLength({ min: 8, max: 32 })
            .withMessage('Password must be between 8 and 32 characters.'),

        body('confirmPassword')
            .notEmpty()
            .custom((value, { req }) => value === req.body.password)
            .withMessage('Password fields must match.'),
    ];
};

exports.create = async function (req, res, next) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        const plaintext = req.body.password;
        const hash = await bcrypt.hash(plaintext, SALT_ROUNDS);

        const user = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            password: hash,
        });

        try {
            await user.save();
            next();
        } catch (e) {
            if (e.name === 'ValidationError') {
                res.render('register', {
                    validationError: { message: 'Username already exists.' }
                });
            } else {
                // unknown error, forward to handler
                next(e);
            }
        }
    } else {
        // render with express-validator errors
        res.render('register', { result });
    }
}
