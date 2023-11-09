const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

// Getting all players/Creating player
router.route('/')
.get(matchesController.getAllMatches)
.post(matchesController.createNewMatch)

// Getting one player
router.route('/:id')
.get(matchesController.getMatchById)
.patch(matchesController.updateMatch)
.delete(matchesController.deleteMatch)

module.exports = router;