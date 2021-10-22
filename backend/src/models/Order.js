const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  table: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDENTE', 'PREPARANDO', 'FINALIZADO'],
    default: 'PENDENTE',
  },
});

module.exports = mongoose.model('Order', OrderSchema);
