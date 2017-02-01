const expressRouter = require('express').Router;
const playersRouter = require('./players');
const gamesRouter = require('./games');
const router = expressRouter();

router.use('/players', playersRouter);
router.use('/games', gamesRouter);

module.exports = router;
