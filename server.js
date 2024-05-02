const express = require('express');
const app = express();
const db = require('./config/db');

app.listen(process.env.PORT, ()=>{
    console.log('server running on port ' + PORT)
});