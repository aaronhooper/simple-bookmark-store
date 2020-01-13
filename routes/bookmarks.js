var express = require('express');
var router = express.Router();

const bookmarks = [
    {
        id: 1,
        title: "test bookmark 1",
        url: "https://duckduckgo.com",
        description: "A private search engine"
    },
    {
        id: 2,
        title: "test bookmark 2",
        url: "https://duckduckgo.com",
        description: "A private search engine"
    },
    {
        id: 3,
        title: "test bookmark 3",
        url: "https://duckduckgo.com",
        description: "A private search engine"
    },
];

/* GET bookmarks listing. */
router.get('/', function(req, res, next) {
  res.render('bookmarks/index', { bookmarks });
});

router.get('/:id', function(req, res, next) {
    const bookmark = bookmarks.filter(bookmark => bookmark.id == req.params.id)[0];
    res.render('bookmarks/bookmark', { bookmark });
});

module.exports = router;
