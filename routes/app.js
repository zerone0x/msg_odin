const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://admin:6W4HGBtRCOoLZ9Ef@cluster0.b8qebhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

async function connectToDB() {
    await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
}


module.exports = connectToDB;