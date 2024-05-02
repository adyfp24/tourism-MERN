const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('koneksi mongoDB berhasil')
    });
} catch (error) {
    console.log('koneksi mongoDB gagal: ', error.message)
}

module.exports = mongoose.connection;