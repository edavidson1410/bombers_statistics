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
        req.body.playerData.map((player) => {
            const player_id = player.player_id;
            const match_id = result.insertId;
            const position_id = player.position_id;
            const tries = player.tries;
            const conversions = player.conversions;
            const createGameStatQuery = "INSERT INTO gamestats VALUES (?, ?, ?, ?, ?, ?)";
            const createGameStatVariables = [0, player_id, match_id, position_id, tries, conversions]
            db.query(createGameStatQuery, createGameStatVariables)
        })  
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
