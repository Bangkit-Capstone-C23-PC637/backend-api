const express = require('express');
const handler = require ('../backend-api/handler');

const router = express.Router();

router.post ('/calculate-bmi', handler.calculateBMI);

module.exports = router;