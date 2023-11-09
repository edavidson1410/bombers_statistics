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

// const updateMatch = (req, res) => {
//     let id = req.params.id;
//     const date = req.body.date;
//     const home_away = req.body.home_away;
//     const bomber_score = req.body.bomber_score;
//     const opponent_score = req.body.opponent_score;

//     db.query(`UPDATE matches
//     SET name = IFNULL(?, name) WHERE id = ?`, [
//         date,
//         home_away,
//         bomber_score,
//         opponent_score,
//         id
//     ], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500);
//         } else {
//             res.status(200);
//             res.send(result);
//         }
//     })
// }

const deleteGameStat = (req, res) => {
    const id = req.params.id;

    db.query(`DELETE FROM gamestat WHERE id=?`, [id], (err, result) => {
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
    updateGameStat,
    deleteGameStat,
    getGameStatById
}