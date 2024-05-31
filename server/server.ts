import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth-route';
import destRoute from './routes/dest-route';
import connectDB from './config/db';

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/v1', authRoute);
app.use('/api/v1', destRoute);
app.use('/storage', express.static('storage'));


app.listen(PORT, () => {
    console.log('server running on port : ' + PORT)
});