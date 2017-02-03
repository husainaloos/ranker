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

router.get('/:id', function(req, res) {
    GameModel.findById(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (!result) {
            res.sendStatus(404);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
