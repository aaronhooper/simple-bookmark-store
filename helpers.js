const express = require('express');
var path = require('path');

const path = inputPath => express.static(path.join(__dirname, inputPath));

module.exports = {
    path,
};
