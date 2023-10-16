const express = require('express');
const router = express.Router();
const db = require('../configs/dbConfig');

// Getting all players
router.get('/', (req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// Getting one player
router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM players WHERE id=${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// Creating player
router.post('/', (req, res) => {
    const name = req.body.name;
    const position = req.body.position;
    const appearances = req.body.appearances;
    const tries = req.body.tries;
    db.query(`INSERT INTO players VALUES (?, ?, ?, ?, ?)`, [0, name, position, appearances, tries], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })

})

// Updating player (patched used to only update given changes vs put would change entire entry)
router.patch('/', (req, res) => {

})

// Deleting player
router.delete('/', (req, res) => {

})

module.exports = router;
