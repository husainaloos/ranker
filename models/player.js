const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    eloRanking: Number,
    createdAt: Date,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
