var AdminView = Backbone.View.extend ({
  el: 'body',

  events: {
    'click #search': 'request'
  },

  request: function(e){
    e.preventDefault();
    var searchIndex = $('#SearchIndex').val();
    var keyword = $('#KeyWord').val();

    var body = {searchIndex: searchIndex, keyword: keyword};

    $.ajax({
         method: "POST",
         url: 'http://localhost:8080/amazon',
         dataType: "json",
         data: body,
         success: function(data) {
            for(var i = 0; i < data.length; i++){
              var searchResult = {
                name: data[i].ItemAttributes[0].Title[0],
                price: data[i].Offers[0].Offer[0].Offerlisting[0].price[0].FormattedPrice[0],
                img: data[i].SmallImage[0].URL[0],
                Information: data[i].DetailPageURL[0];
              }

              
            }
         },
         error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
         }
      });
  }

});