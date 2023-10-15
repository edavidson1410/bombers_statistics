const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require('./configs/dbConfig');

//middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded{(extended:true)});

//routes
const playerRouter = require("./routes/players");
app.use("/players", playerRouter);
//TODO: add games route

//server startup
app.get('/', function (req, res) {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("This is the home page");
        }
    })
})

// Generic query method
function queryPromise(sql, values={}){
    return new Promise((resolve, reject) => {
        db.query(sql, values, (error, results) => {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

app.listen(port, () => console.log(`Server started on port ${port}`));