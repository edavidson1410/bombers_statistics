const db = require('../configs/dbConfig');

const getAllMatches = (req, res) => {
    db.query('SELECT * FROM matches', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

const createNewMatch = (req, res) => {
    const date = req.body.date;
    const home_away = req.body.home_away;
    const bombers_score = req.body.bombers_score;
    const opponent_score = req.body.opponent_score;
    const opponent_id = req.body.opponent_id;
    db.query(`INSERT INTO matches VALUES (?, ?, ?, ?, ?, ?)`, [0, date, home_away, bombers_score, opponent_score, opponent_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })
}

const getMatchById = (req, res) => {
    db.query(`SELECT * FROM matches WHERE match_id=${req.params.id}`, (err, result) => {
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
    getAllMatches,
    createNewMatch,
    getMatchById
}