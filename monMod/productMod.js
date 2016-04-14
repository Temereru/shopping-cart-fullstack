var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  price: Number,
  img: String
})

var Product = mongoose.model('Product', productSchema);
module.exports = Product;