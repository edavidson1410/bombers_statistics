const express = require('express');
const router = express.Router();
const matcheSubmissionController = require('../controllers/matchSubmissionController');

// Getting all matches/Creating matches
router.route('/')
.post(matcheSubmissionController.createNewMatchSubmission)

// Getting one match
router.route('/:id')
.get(matcheSubmissionController.getMatchSubmissionById)

module.exports = router;