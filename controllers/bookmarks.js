const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

const {
    addEditUrl,

} = require('../helpers');

const Bookmark = require('../models/bookmark');

const create = async function (req, res, next) {
    try {
        const url = req.body.url;
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text() || 'Untitled';
        const description = $('meta[name="description"]').attr('content') || 'No description.';

        const bookmark = new Bookmark({
            date: Date.now(),
            url,
            title,
            description,
        });

        await bookmark.save();
        next();
    } catch (e) {
        next(e);
    }
}

const readAll = async function (req, res, next) {
    const bookmarks = await Bookmark.find().sort([['date', -1]]);

    if (bookmarks) {
        bookmarks.map(addEditUrl(req.baseUrl));
    }

    res.render('bookmarks/index', { bookmarks });
}

const readOne = async function (req, res, next) {
    const id = req.params.id;
    const bookmark = await Bookmark.findById(id);
    res.render('bookmarks/bookmark', { bookmark });
}

module.exports = {
    create,
    readAll,
    readOne,
};