const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
    date: Date,
    title: String,
    url: String,
    description: String,
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);