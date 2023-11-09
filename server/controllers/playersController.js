const db = require('../configs/dbConfig');

const getAllPlayers = (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

const createNewPlayer = (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    db.query(`INSERT INTO players VALUES (?, ?, ?)`, [0, first_name, last_name], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })

}

const updatePlayer = (req, res) => {
    let id = req.params.player_id;
    const first_name = req.params.first_name;
    const last_name = req.body.last_name;

    db.query(`UPDATE players
    SET first_name = IFNULL(?, first_name), last_name = IFNULL(?, last_name) WHERE player_id = ?`, [
        first_name,
        last_name,
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

const deletePlayer = (req, res) => {
    const id = req.params.player_id;

    db.query(`DELETE FROM players WHERE id=?`, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })
}

const getPlayerById = (req, res) => {
    db.query(`SELECT * FROM players WHERE player_id=${req.params.id}`, (err, result) => {
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
    getAllPlayers,
    createNewPlayer,
    updatePlayer,
    deletePlayer,
    getPlayerById
}