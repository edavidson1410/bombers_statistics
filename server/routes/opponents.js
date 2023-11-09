const express = require('express');
const router = express.Router();
const opponentsController = require('../controllers/opponentsController');

// Getting all opponent/Creating opponent
router.route('/')
.get(opponentsController.getAllOpponents)
.post(opponentsController.createNewOpponent)

// Getting one match
router.route('/:id')
.get(opponentsController.getOpponentById)
.patch(opponentsController.updateOpponent)
.delete(opponentsController.deleteOpponent)

module.exports = router;