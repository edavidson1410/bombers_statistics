const express = require('express');
const router = express.Router();
const matchSubmissionController = require('../controllers/matchSubmissionController');

// Getting all matches/Creating matches
router.route('/')
.get(matchSubmissionController.getAllMatches)
.post(matchSubmissionController.createNewMatch)

// Getting one match
router.route('/:id')
.get(matchSubmissionController.getMatchById)
// .patch(playersController.updateMatch)
// .delete(playersController.deleteMatch)

module.exports = router;