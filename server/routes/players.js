const express = require('express');
const router = express.Router();
module.exports = router;

// Getting all players
router.get('/', (req, res) => {
    res.send("Hello, World!")
})

// Getting one player
router.get('/:id', (req, res) => {
    req.params.id;
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
