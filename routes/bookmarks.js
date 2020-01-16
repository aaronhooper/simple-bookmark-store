var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const bookmark = require('../controllers/bookmark');

router.post('/', bookmark.createBookmark);
router.get('/', bookmark.readBookmarks);
router.get('/:id', bookmark.readBookmark);

module.exports = router;
