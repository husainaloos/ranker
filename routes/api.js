const expressRouter = require('express').Router;
const playersRouter = require('./players');
const router = expressRouter();

router.use('/players', playersRouter);

module.exports = router;
