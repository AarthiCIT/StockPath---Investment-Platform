const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  symbol: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  purchasePrice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Stock', stockSchema);