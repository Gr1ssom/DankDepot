const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  barcode: String,
  name: String,
  price: Number,
  // Add other necessary fields as per your requirements
});

module.exports = mongoose.model('Product', ProductSchema);
