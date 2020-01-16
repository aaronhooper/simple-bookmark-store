const express = require('express');
var path = require('path');

function addEditUrl(baseUrl) {
    return function (obj) {
        obj['editUrl'] = baseUrl + '/' + obj._id.toString();
        return obj;
    }
}

const path = inputPath => express.static(path.join(__dirname, inputPath));

module.exports = {
    addEditUrl,
    path,
};
