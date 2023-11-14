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
const playerInputRouter = require("./routes/playersInput");
app.use("/playersInput", playerInputRouter);

const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

const matchesRouter = require("./routes/matches");
app.use("/matches", matchesRouter);

const opponentsRouter = require("./routes/opponents");
app.use("/opponents", opponentsRouter);

const gamestatsRouter = require("./routes/gameStats");
app.use("/gamestats", gamestatsRouter);

//server startup
app.get('/', function (req, res) {
    db.query('SELECT * FROM playersInput', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})



app.listen(port, () => console.log(`Server started on port ${port}`));