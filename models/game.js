const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    player1: {
        type: String,
        required: true,
    },
    player2: {
        type: String,
        required: true,
    },
});

const gameSchema = new Schema({
    id: Schema.Types.ObjectId,
    player1: {
        type: String,
        required: true,
    },
    player2: {
        type: String,
        required: true,
    },
    score: {
        type: scoreSchema,
        required: true,
    },
    insertedBy: {
        type: String,
        required: true,
    },
    acceptedAt: {
        type: Date,
        required: true,
    },
    playedAt: {
        type: Date,
        required: true,
    },
});

const GameModel = mongoose.model('Game', gameSchema);

module.exports = GameModel;
