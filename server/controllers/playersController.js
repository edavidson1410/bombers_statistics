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
    const name = req.body.name;
    const position = req.body.position;
    const caps = req.body.caps;
    const tries = req.body.tries;
    db.query(`INSERT INTO players VALUES (?, ?, ?, ?, ?)`, [0, name, position, caps, tries], (err, result) => {
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
    let id = req.params.id;
    const name = req.body.name;
    const position = req.body.position;
    const caps = req.body.caps;
    const tries = req.body.tries;

    db.query(`UPDATE players
    SET name = IFNULL(?, name), position = IFNULL(?, position), caps=IFNULL(?, caps), tries=IFNULL(?, tries) WHERE id = ?`, [
        name,
        position,
        caps,
        tries,
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
    const id = req.params.id;

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
    db.query(`SELECT * FROM players WHERE id=${req.params.id}`, (err, result) => {
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
