const express = require('express');
const router = express.Router();
const gameStatsController = require('../controllers/gameStatsController');

// Getting all matches/Creating matches
router.route('/')
.get(gameStatsControllerController.getAllGameStats)
.post(gameStatsController.createNewGameStat)

// Getting one match
router.route('/:id')
.get(gameStatsController.getGameStatById)
.patch(gameStatsController.updateGameStat)
.delete(gameStatsController.deleteGameStat)

module.exports = router;