import express from 'express';
import {connectToDatabase} from './config/db';
import User from './models/User';

const app = express();
const PORT = process.env.PORT;
import {Request, Response} from "express";


app.get('/test', async (res: Response, req: Request) => {
    const user = new User({
        username: 'ady',
        email: 'ady24@gmail.com',
        password: '123',
        role: 'user',
    });

    const data = await user.save();
    res.status(200).json({
        success: true,
        message: 'berhasil mendapat data user',
        data: data
    });
});

app.listen(PORT, ()=>{
    console.log('server running on port ' + PORT)
});