const express = require('express');
const router = express.Router();
const playersInputController = require('../controllers/playersInputController');

// Getting all players/Creating player
router.route('/')
.get(playersInputController.getAllPlayers)
.post(playersInputController.createNewPlayer)

// Getting one player
router.route('/:id')
.get(playersInputController.getPlayerById)
.patch(playersInputController.updatePlayer)
.delete(playersInputController.deletePlayer)

module.exports = router;
