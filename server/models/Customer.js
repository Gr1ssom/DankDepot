const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  id: String,
  purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  // Add other necessary fields as per your requirements
});

module.exports = mongoose.model('Customer', CustomerSchema);
