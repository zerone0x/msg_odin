const {format} = require('date-fns');
const mongoose = require('mongoose');
function formatDate(milliseconds) {
    let date = format(milliseconds, 'yyyy-MM-dd HH:mm:ss');
    console.log(date);
    return date;
  }
 

const postSchema = new mongoose.Schema({
    text: String,
    user: String,
    added: {
        type: Date,
        default: formatDate(Date.now())
    }
});


module.exports = mongoose.model('Post', postSchema);