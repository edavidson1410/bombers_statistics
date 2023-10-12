const express = require('express');
const app = express();
const port = 3000;

//connect to .env file
const env = require('dotenv').config();

//mysql connection
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: env.parsed.dbPassword
})

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!")
})

//server startup
app.get('/', function (req, res) {
    res.send("Hello, World!")
})

app.listen(port, () => console.log(`Server started on port ${port}`));