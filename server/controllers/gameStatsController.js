const db = require('../configs/dbConfig');

const getAllGameStats = (req, res) => {
    db.query('SELECT * FROM gamestat', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

const createNewGameStat = (req, res) => {
    const player = req.body.player_id;
    const match = req.body.match_id;
    const position = req.body.position_id;
    const tries = req.body.tries;
    const conversions = req.body.conversions;
    db.query(`INSERT INTO gamestats VALUES (?, ?, ?, ?, ?, ?)`, [0, player, match, position, tries, conversions], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })

}

const getGameStatById = (req, res) => {
    db.query(`SELECT * FROM gamestats WHERE id=${req.params.id}`, (err, result) => {
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
    getAllGameStats,
    createNewGameStat,
    getGameStatById
}