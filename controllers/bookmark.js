const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

const Bookmark = require('../models/bookmark');

const createBookmark = async function (req, res, next) {
    try {
        const url = req.body.url;
        const response = await axios.get(req.params.url);
        const $ = cheerio.load(response);
        const title = $('title').text() || 'Untitled';
        const description = $('meta[name="description]"').text() || 'No description.';
        const bookmark = new Bookmark({ url, title, description });
        await bookmark.save();
        res.redirect('/bookmarks');
    } catch (e) {
        next(e);
    }
}

const readBookmarks = async function (req, res, next) {
    const bookmarks = await Bookmark.find();
    res.render('bookmarks/index', { bookmarks });
}

const readBookmark = async function (req, res, next) {
    const id = req.params.id;
    const bookmark = await Bookmark.findById(id);
    res.render('bookmarks/bookmark', { bookmark });
}

module.exports = {
    createBookmark,
    readBookmarks,
    readBookmark,
};