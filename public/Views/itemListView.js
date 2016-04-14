var ItemListView = Backbone.View.extend ({
  el: '.list',

  events: {
    'click .list-products': 'renderList',
    'click li': 'setCard'
  },

  initialize: function(){
    this.listenTo(this.model.get('products'), 'destroy', this.renderList);
    this.model.get('products').fetch();

    // var cardModel = new ProductModel();
    this.cardView = new CardView();
  },

  renderList: function(){
    this.$el.find('#listContainer').find('ul').empty();
    this.model.get('products').each(function(element, index, list){
      this.$el.find('#listContainer').find('ul').append('<li data-id="' + element.id + '">' + element.get('name') + '</li>');
    }, this);
  },

  setCard: function(e){
    this.cardView.model = this.model.get('products').get($(e.target).data().id);
    this.renderCard();
  },

  renderCard: function(){
    this.$el.find('#cardContainer').children().detach();
    this.$el.find('#cardContainer').html(this.cardView.render().el)
  }
  
});