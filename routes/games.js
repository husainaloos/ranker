const expressRouter = require('express').Router;
const router = expressRouter();
const GameModel = require('../models/game');

router.get('/', function(req, res) {
    GameModel.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

module.exports = router;
