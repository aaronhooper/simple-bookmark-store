const express = require('express');
var { join } = require('path');

function addEditUrl(baseUrl) {
    return function (obj) {
        obj['editUrl'] = baseUrl + '/' + obj._id.toString();
        return obj;
    }
}

const path = input => express.static(join(__dirname, input));

module.exports = {
    addEditUrl,
    path,
};
