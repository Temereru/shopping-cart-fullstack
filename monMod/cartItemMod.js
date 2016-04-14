var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cartItemSchema = new Schema({
    name: String,
    price: Number,
    amount: Number
})

var CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;