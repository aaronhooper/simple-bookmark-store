var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Bookmark = require('../models/bookmark');

/* GET bookmarks listing. */
router.get('/', async function(req, res, next) {
    const bookmarks = await Bookmark.find();
    res.render('bookmarks/index', { bookmarks });
});

router.get('/:id', function(req, res, next) {
    const bookmark = bookmarks.filter(bookmark => bookmark.id == req.params.id)[0];
    res.render('bookmarks/bookmark', { bookmark });
});

module.exports = router;
