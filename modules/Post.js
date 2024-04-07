const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    user: String,
    added: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Post', postSchema);