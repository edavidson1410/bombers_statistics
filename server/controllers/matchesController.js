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
    const bomber_score = req.body.bomber_score;
    const opponent_score = req.body.opponent_score;
    db.query(`INSERT INTO matches VALUES (?, ?, ?, ?, ?)`, [0, date, home_away, bomber_score, opponent_score], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })

}

const updateMatch = (req, res) => {
    let id = req.params.match_id;
    const date = req.body.date;
    const home_away = req.body.home_away;
    const bomber_score = req.body.bomber_score;
    const opponent_score = req.body.opponent_score;

    db.query(`UPDATE matches
    SET date = IFNULL(?, date), home_away = IFNULL(?, home_away), bomber_score = IFNULL(?, bomber_score), opponent_score = IFNULL(?, opponent_score) WHERE match_id = ?`, [
        date,
        home_away,
        bomber_score,
        opponent_score,
        id
    ], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })
}

const deleteMatch = (req, res) => {
    const id = req.params.match_id;

    db.query(`DELETE FROM matches WHERE match_id=?`, [id], (err, result) => {
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
    updateMatch,
    deleteMatch,
    getMatchById
}