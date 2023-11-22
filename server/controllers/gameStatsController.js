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

const createNewGameStat = (req, res, err, result) => {
    //cycles through each player and adds their gamestat individually
    req.body.playerData.map((player) => {
        const player_id = player.player_id;
        const match_id = 1;
        const position_id = player.position_id;
        const tries = player.tries;
        const conversions = player.conversions;
        db.query(`INSERT INTO gamestats VALUES (?, ?, ?, ?, ?, ?)`, [0, player_id, match_id, position_id, tries, conversions])
    })  
    if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
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