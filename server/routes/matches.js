const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matchesController');

// Getting all matches/Creating matches
router.route('/')
.get(matchesController.getAllMatches)

// Getting one match
router.route('/:id')
.get(matchesController.getMatchById)

module.exports = router;