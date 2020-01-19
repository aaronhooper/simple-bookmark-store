const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// throws ValidationError when unique constraint is violated
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);