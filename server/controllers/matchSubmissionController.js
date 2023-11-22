const db = require('../configs/dbConfig');
const matchesController = require('../controllers/matchesController');
const gameStatsController = require('../controllers/gameStatsController');

//refactor for full match submission

const createNewMatchSubmission = (req, res) => {
    const date = req.body.match.date;
    const home_away = req.body.match.home_away;
    const bombers_score = req.body.match.bombers_score;
    const opponent_score = req.body.match.opponent_score;
    const opponent_id = req.body.match.opponent_id;

    const createMatchQuery = "INSERT INTO matches VALUES (?, ?, ?, ?, ?, ?)";
    const createMatchVariables = [0, date, home_away, bombers_score, opponent_score, opponent_id];

    db.query(createMatchQuery, createMatchVariables, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
            match_id = result.insertId
        }
    })
    //need to grab match ID after creation for gamestat
    // gameStatsController.createNewGameStat(req, res);

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
