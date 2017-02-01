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
    eloRanking: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});

const PlayerModel = mongoose.model('Player', playerSchema);

module.exports = PlayerModel;
