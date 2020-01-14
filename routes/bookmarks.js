var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const bookmark = require('../controllers/bookmark');

/* GET bookmarks listing. */
router.get('/', bookmark.readBookmarks);

router.post('/', bookmark.createBookmark);

router.get('/:id', bookmark.readBookmark);

module.exports = router;
