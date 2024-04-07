require('dotenv').config();
const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI;

async function connectToDB() {
    await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
}


module.exports = connectToDB;