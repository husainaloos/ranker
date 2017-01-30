var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    eloRanking: Number,
    createdAt: Date
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;