var ResultsView = Backbone.View.extend ({
  el: '.resultList',

  events: {
    'click #search': 'request',
    'click li': 'setCard'
  },

  initialize: function(){
    this.listenTo(this.model.get('results'), 'add', this.renderList)
    this.cardView = new CardView();
  },

  renderList: function(){
    this.$el.find('#searchListContainer').find('ul').empty();
    this.model.get('results').each(function(element, index, list){
      this.$el.find('#searchListContainer').find('ul').append('<li data-id="' + element.id + '">' + element.get('name') + '</li>');
    }, this);
  },

  setCard: function(e){
    this.cardView.model = this.model.get('results').get($(e.target).data().id);
    this.renderCard();
  },

  renderCard: function(){
    this.$el.find('#searchCardContainer').children().detach();
    this.$el.find('#searchCardContainer').html(this.cardView.render().el)
  },

  request: function(e){
    e.preventDefault();
    var searchIndex = $('#SearchIndex').val();
    var keyword = $('#KeyWord').val();
    
    var body = {searchIndex: searchIndex, keyword: keyword};
    this.model.get('results').reset();
    this.$el.find('#searchCardContainer').children().detach();
    var collection = this.model.get('results');
    $.ajax({
         method: "POST",
         url: 'http://localhost:8080/amazon',
         dataType: "json",
         data: body,
         success: function(data) {
          console.log(data);
            for(var i = 0; i < data.length; i++){
              var searchResult = {
                name: data[i].ItemAttributes[0].Title[0],
                price: Number(data[i].Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0].replace(/[^0-9\.]+/g,'')),
                img: data[i].LargeImage[0].URL[0],
                Information: data[i].DetailPageURL[0],
                id: i
              }
              collection.add(searchResult);
            }
         },
         error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
         }
      });
  }
});