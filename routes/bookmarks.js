var express = require('express');
var router = express.Router();

const bookmarks = [
    {
        title: "test bookmark 1",
        url: "https://duckduckgo.com",
        description: "A private search engine"
    },
    {
        title: "test bookmark 2",
        url: "https://duckduckgo.com",
        description: "A private search engine"
    },
    {
        title: "test bookmark 3",
        url: "https://duckduckgo.com",
        description: "A private search engine"
    },
];

/* GET bookmarks listing. */
router.get('/', function(req, res, next) {
  res.render('bookmarks/index', { bookmarks });
});

module.exports = router;
