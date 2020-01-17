var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const bookmarks = require('../controllers/bookmarks');

router.post('/', bookmarks.create);
router.get('/', bookmarks.readAll);
router.get('/:id', bookmarks.readOne);

module.exports = router;
