import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI || '');
        console.log('koneksi mongoDB berhasil');
        return connection; 
    } catch (error) {
        console.log('koneksi mongoDB gagal: ' + error);
        process.exit(1);
    }
};

export default connectDB;
