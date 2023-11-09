const db = require('../configs/dbConfig');

const getAllMatches = (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

const createNewMatch = (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    db.query(`INSERT INTO playersinput VALUES (?, ?, ?)`, [0, first_name, last_name], (err, result) => {
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
    let id = req.params.id;
    const name = req.body.name;
    const position = req.body.position;
    const caps = req.body.caps;
    const tries = req.body.tries;

    db.query(`UPDATE players
    SET name = IFNULL(?, name) WHERE id = ?`, [
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

const deleteMatch = (req, res) => {
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

const getMatchById = (req, res) => {
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
    getAllMatches,
    createNewMatch,
    updateMatch,
    deleteMatch,
    getMatchById
}