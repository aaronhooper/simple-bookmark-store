var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const bookmarks = require('../controllers/bookmarks');

router.post('/', bookmarks.createBookmark);
router.get('/', bookmarks.readBookmarks);
router.get('/:id', bookmarks.readBookmark);

module.exports = router;
