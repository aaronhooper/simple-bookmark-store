const express = require('express');
var { join } = require('path');

function addEditUrl(baseUrl) {
    // return function that can be used with map
    return function (obj) {
        obj['editUrl'] = baseUrl + '/' + obj._id.toString();
        return obj;
    }
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}

const path = input => express.static(join(__dirname, input));

module.exports = {
    addEditUrl,
    ensureAuthenticated,
    path,
};
