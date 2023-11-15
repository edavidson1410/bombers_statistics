const db = require('../configs/dbConfig');

const getAllOpponents = (req, res) => {
    db.query('SELECT * FROM opponents', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

const createNewOpponent = (req, res) => {
    const name = req.body.name;
    db.query(`INSERT INTO opponents VALUES (?, ?)`, [0, name], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })

}

const getOpponentById = (req, res) => {
    db.query(`SELECT * FROM opponents WHERE opponent_id=${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })
}

module.exports = {
    getAllOpponents,
    createNewOpponent,
    getOpponentById
}