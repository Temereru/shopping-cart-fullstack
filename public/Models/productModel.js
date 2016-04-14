//model for the products, used to display the product cards
var ProductModel = Backbone.Model.extend({
  defaults: {
    name: "",
    price: 0,
    img: ""
  },


  parse: function(res){
    res.id = res._id;

    return res;
  }

});