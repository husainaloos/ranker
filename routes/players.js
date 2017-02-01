const expressRouter = require('express').Router;
const router = expressRouter();
const config = require('../config/config');
const PlayerModel = require('../models/player');

router.get('/', function(req, res) {
    PlayerModel.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

router.get('/:username', function(req, res) {
    PlayerModel.findOne({
        username: req.params.username,
    }, function(err, result) {
        if (err) {
            res.status(500).send(500);
        } else if (!result) {
            res.sendStatus(404);
        } else {
            res.send(result);
        }
    });
});

router.post('/', function(req, res) {
    const player = new PlayerModel(req.body);
    player.createdAt = Date.now();
    player.eloRanking = config.ranking.startRanking;
    player.validate(function(err) {
        if (err) {
            res.status(400).send(err);
        } else {
            player.save(function(err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});

router.delete('/:username', function(req, res) {
    PlayerModel.findOneAndRemove({
        username: req.params.username,
    }, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (!result) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    });
});

router.put('/:username', function(req, res) {
    const player = new PlayerModel(req.body);
    player.username = req.params.username;
    player.validate(function(err) {
        if (err) {
            res.status(400).send(err);
        } else {
            PlayerModel.findOneAndUpdate({
                username: req.params.username,
            }, player, function(err, result) {
                if (err) {
                    res.status(500).send(err);
                } else if (!result) {
                    res.sendStatus(404);
                } else {
                    res.send(200);
                }
            });
        }
    });
});

module.exports = router;
