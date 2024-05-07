const express = require('express');
const app = express();
const db = require('./config/db');
const User = require('./models/User');
const PORT = process.env.PORT;

app.get('/test', async (req, res) => {
    const user = new User({
        username: 'ady',
        email: 'ady24@gmail.com',
        password: '123',
        role: 'user',
    })

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