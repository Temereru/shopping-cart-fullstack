var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/shop');
var client = require("./amazon");
var CartItem = require('./monmod/cartItemMod');
var Product = require('./monmod/productMod');

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.listen(8080);

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/products', function(req, res){
  Product.find(function(err, products){
    res.json(products);
  })
});

app.delete('/products/:id',  function(req, res, next) {
  var id = req.params.id;
  products.findByIdAndRemove(id, function(a){
    res.end(a);
  });
});

app.post('/amazon', function(req, response, next){
  client.itemSearch({
    searchIndex: req.body.searchIndex,
    Keywords: req.body.keyword,
    responseGroup: 'ItemAttributes,Offers,Images'
    }, function(err, results, res) {
      if (err) {
      response.end(JSON.stringify(err));
    } else {
      response.end(JSON.stringify(results));  // products     
      response.end(JSON.stringify(res)); // response (containing TotalPages, TotalResults, MoreSearchResultsUrl and so on) 
    }
  });
});
