const express = require('express');
const router = express.Router();
const Player = require("../models/player")
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
    res.send(req.params.id);
})

// Creating player
router.post('/', (req, res) => {
    
})

// Updating player (patched used to only update given changes vs put would change entire entry)
router.patch('/', (req, res) => {

})

// Deleting player
router.delete('/', (req, res) => {

})

module.exports = router;
