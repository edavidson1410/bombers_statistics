const db = require('../configs/dbConfig');


//refactor for full match data submission
const getAllFullMatches = (req, res) => {
    db.query('SELECT * FROM matches', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
}

const getFullMatchById = (req, res) => {
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
    getAllFullMatches,
    getFullMatchById
}
