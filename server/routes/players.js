const express = require('express');
const router = express.Router();
const db = require('../configs/dbConfig');

// Getting all players
router.get('/', async(req, res) => {
    db.query('SELECT * FROM players', (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })
})

// Getting one player
router.get('/:id', async(req, res) => {
    db.query(`SELECT * FROM players WHERE id=${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200);
            res.send(result);
        }
    })
})

// Creating player
router.post('/', async(req, res) => {
    const name = req.body.name;
    const position = req.body.position;
    const caps = req.body.caps;
    const tries = req.body.tries;
    db.query(`INSERT INTO players VALUES (?, ?, ?, ?, ?)`, [0, name, position, caps, tries], (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.send(result);
        }
    })

})

// Updating player (patched used to only update given changes vs put would change entire entry)
router.patch('/:id', async(req, res) => {
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
            res.send(500);
        } else {
            res.send(result);
        }
    })
})

// Deleting player
router.delete('/:id', async(req, res) => {
    const id = req.params.id;

    db.query(`DELETE FROM players WHERE id=?`, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.send(result);
        }
    })
})

module.exports = router;
