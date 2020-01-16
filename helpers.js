const express = require('express');
var pathModule = require('path');

function addEditUrl(baseUrl) {
    return function (obj) {
        obj['editUrl'] = baseUrl + '/' + obj._id.toString();
        return obj;
    }
}

const path = inputPath => express.static(pathModule.join(__dirname, inputPath));

module.exports = {
    addEditUrl,
    path,
};
