const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    url: String,
    description: String,
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);