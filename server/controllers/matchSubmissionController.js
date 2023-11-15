const db = require('../configs/dbConfig');

//refactor for full match submission

const createNewMatchSubmission = (req, res) => {

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

const getMatchSubmissionById = (req, res) => {
    db.query(`SELECT * FROM matches WHERE id=${req.params.id}`, (err, result) => {
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
    createNewMatchSubmission,
    getMatchSubmissionById
}
