const express = require('express');
const router = express.Router();
const { getAllCycles, createCycle, deleteCycle, getPrediction } = require('../controllers/cycle.controller');

router.get('/', getAllCycles);
router.post('/', createCycle);
router.delete('/:id', deleteCycle);
router.get('/prediction', getPrediction);

module.exports = router;
