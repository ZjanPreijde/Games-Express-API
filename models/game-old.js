// models/game.js
const mongoose = require('../config/database')
const { Schema } = mongoose

// Has to do with cards
const cardSchema = new Schema({
  symbol: { type: String, required: true },
  visible: { type: Boolean, default: false },
  won: { type: Boolean, default: false },
});

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  pairs: [String], // Has to do with cards
});

const gameSchema = new Schema({
  cards: [cardSchema],  // Has to do with cards
  players: [playerSchema],
  turn: { type: Number, default: 0 }, // player index
  started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastCard: { type: Number }, // Has to do with cards
  draw: { type: Boolean, default: false },
});

module.exports = mongoose.model('games', gameSchema)
