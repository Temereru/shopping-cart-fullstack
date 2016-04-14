var ItemListModel = Backbone.Model.extend({
  defaults: {
    fetched: new ProductCollection(),
    products: new ProductCollection()
  }
});