const express = require('express');
const handler = require('./handler');
const { authenticateToken, generateBearerToken } = require('./middleware');

const router = express.Router();

router.post('/calculate-bmi', authenticateToken, handler.calculateBMI);
router.post('/generate-token', generateBearerToken);

module.exports = router;
