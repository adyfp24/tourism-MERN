const mongoose = require('mongoose');
require('dotenv').config();

try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('koneksi mongoDB berhasil');
} catch (error) {
    console.log('koneksi mongoDB gagal: ', error.message)
}

module.exports = mongoose.connection;