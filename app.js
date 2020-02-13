var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var helmet = require('helmet');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('express-flash')
var { join } = require('path');

var {
    path,

} = require('./helpers');

var indexRouter = require('./routes');

// database
mongoose.connect(process.env.DB_URI, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
});

var app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(helmet());
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// static paths
app.use(path('public'));
app.use('/vendor/bootstrap', path('node_modules/bootstrap'));
app.use('/vendor/fontawesome-free', path('node_modules/@fortawesome/fontawesome-free'));

// index route
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
