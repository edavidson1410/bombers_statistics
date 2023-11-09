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

// const updatePlayer = (req, res) => {
//     let id = req.params.id;
//     const name = req.body.name;
//     const position = req.body.position;
//     const caps = req.body.caps;
//     const tries = req.body.tries;

//     db.query(`UPDATE players
//     SET name = IFNULL(?, name), positioninput = IFNULL(?, position), caps=IFNULL(?, caps), tries=IFNULL(?, tries) WHERE id = ?`, [
//         name,
//         position,
//         caps,
//         tries,
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

// const deletePlayer = (req, res) => {
//     const id = req.params.id;

//     db.query(`DELETE FROM playersinput WHERE id=?`, [id], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500);
//         } else {
//             res.status(200);
//             res.send(result);
//         }
//     })
// }

const getMatchById = (req, res) => {
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
    getAllMatches,
    createNewMatch,
    // updateMatch,
    // deleteMatch,
    getMatchById
}