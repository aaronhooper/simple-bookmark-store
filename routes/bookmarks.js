var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const bookmarks = require('../controllers/bookmarks');

router.post('/', bookmarks.create, function (req, res) {
    res.redirect('/bookmarks');
});
router.get('/', bookmarks.readAll);
router.get('/:id', bookmarks.readOne);

module.exports = router;
