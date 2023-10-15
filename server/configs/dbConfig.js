const mysql = require('mysql2');
//connect to .env file
const env = require('dotenv').config();


//mysql connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: env.parsed.dbPassword,
    database: "bombers_statistics"
})

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
})

module.exports = db;