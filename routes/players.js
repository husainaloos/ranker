var express = require('express');
var router = express.Router();
var Player = require('../model/player');

router.get('/', function(req, res) {
    var allPlayers = Player.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

router.get('/:username', function(req, res) {
    var allPlayers = Player.findOne({ username: req.params.username }, function(err, result) {
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
    var player = new Player(req.body);
    var err = player.validate(function(err) {
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

module.exports = router;