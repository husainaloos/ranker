var express = require('express');
var playersRouter = require('./players');
var router = express.Router();

router.use('/players', playersRouter);

module.exports = router;