var ProductView = Backbone.View.extend({
  template: $('#item-card'),

  events: {
    'click .deletebox': 'deleteProduct'
  },

  //remove a product from the collection and the display
  deleteProduct: function() {
    this.model.destroy();
    this.remove();
  },

  //create the product card display from the template
  render: function() {
    var template = Handlebars.compile(this.template.html());

    var modelJ = this.model.toJSON();
    modelJ.cid = this.model.collection.get(this.model).cid;
    this.$el.html(template(modelJ));
    return this;
  }
});