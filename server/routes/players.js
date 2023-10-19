const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

// Getting all players/Creating player
router.route('/')
.get(playersController.getAllPlayers)
.post(playersController.createNewPlayer)

// Getting one player
router.route('/:id')
.get(playersController.getPlayerById)
.patch(playersController.updatePlayer)
.delete(playersController.deletePlayer)

module.exports = router;
