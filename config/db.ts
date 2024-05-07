import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || '');
        console.log('koneksi mongoDB berhasil');
    } catch (error: unknown) {
        console.log('koneksi mongoDB gagal: ', (error as Error).message);
        process.exit(1); 
    }
};

connectToDatabase();

export default mongoose.connection;



