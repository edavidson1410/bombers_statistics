const express = require('express');
const router = express.Router();
const gameStatsController = require('../controllers/gameStatsController');

// Getting all matches/Creating matches
router.route('/')
.get(gameStatsController.getAllGameStats)
.post(gameStatsController.createNewGameStat)

// Getting one match
router.route('/:id')
.get(gameStatsController.getGameStatById)

module.exports = router;