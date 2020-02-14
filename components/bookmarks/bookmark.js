const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

const bookmarkSchema = mongoose.Schema({
    date: Date,
    title: String,
    url: String,
    description: String,
    userId: Types.ObjectId,
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);