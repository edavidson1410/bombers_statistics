const express = require('express');
const app = express();
const port = 3001;
const db = require('./configs/dbConfig');
const cors = require('cors');
const corsOptions = require('./configs/corsOptions');

//middleware; handles structure of POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use CORS
app.use(cors(corsOptions));

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
            res.send(result);
        }
    })
})



app.listen(port, () => console.log(`Server started on port ${port}`));