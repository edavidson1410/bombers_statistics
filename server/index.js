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
    password: env.parsed.dbPassword,
    database: "bombers_statistics"
})

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
})

//routes
const playerRouter = require("./routes/players");
app.use("/players", playerRouter);

//server startup
app.get('/', function (req, res) {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(port, () => console.log(`Server started on port ${port}`));