var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var users = require('../controllers/users');
var User = require('../models/user');

passport.use(new LocalStrategy(
    async function (username, password, done) {
        const user = await User.findOne({ username });

        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!await user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true,
    }),
    (req, res) => res.send(`User ${req.user.username} logged in!`)
);

module.exports = router;
