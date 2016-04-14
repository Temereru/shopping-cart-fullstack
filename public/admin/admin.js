var resultsModel = new ResultsModel();
var resultsView = new ResultsView({ model: resultsModel });
var itemListModel = new ItemListModel();
var itemListView = new ItemListView({ model: itemListModel });


// // an array with all products, added 2 for tests. !need to impelement push and pull from local storage or remote database!
// // var products = [
// // {name:'glass',price:68,url:'http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg'},
// // {name:'pencils',price:3,url:'http://ecx.images-amazon.com/images/I/51YFEe%2BCYbL.jpg'}
// // ];

// //local storage module
// var Storage = function(){
//   var products = [];

//   var get = function(key){
//     var info = JSON.parse(localStorage.getItem(key));
//     return info
//   }

//   var set = function(){
//     localStorage.setItem('products',JSON.stringify(this.products));
//   }

//   products = get('products');

//   return {
//     get: get,
//     set: set,
//     products: products
//   }
// }
// //helper function to validate if the add product form was submitted with empty values
// var _validate = function(product){
//   var name = true;
//   var price = true;
//   var url = true;
//   console.log(product.name)
//   if(product.name === ''){
//     name = false;
//   }
//   if(product.price === ''){
//     price = false;
//   }
//   if(product.url === ''){
//     url = false;
//   }
//   if(!name && !price && !url){
//     $('#name-error').text('You have to enter a name, a price and a url for a photo');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }else if(!name && !price){
//     $('#name-error').text('You have to enter a name and a price');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }else if(!price && !url){
//     $('#name-error').text('You have to enter a price and a url for a photo');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }else if(!name && !url){
//     $('#name-error').text('You have to enter a name and a url for a photo');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }else if(!name){
//     $('#name-error').text('You have to enter a name');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }else if(!price){
//     $('#name-error').text('You have to enter a price');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }else if(!url){
//     $('#name-error').text('You have to enter a url for a photo');
//     $('#name-error').toggleClass('showa');
//     return false;
//   }
//   return true;
// }

// //add the new product to the array if it's name isn't already taken, otherwise return error
// var addProduct = function (product) {
//   var l = storage.products.length;
//   if(_validate(product)){
//     for(i = 0; i < l; i++){
//       if(storage.products[i].name === product.name) {
//         $('#name-error').text('This name is already taken');
//         $('#name-error').toggleClass('showa');
//         return false;
//       }
//     }
//     storage.products.push(product);
//     storage.set();
//     return true;
//   }
//   return false;
// }
// //display all products in the products array in the list display
// var listProducts = function(){
//   $('#listContainer').find('ul').empty();
//   var l = storage.products.length;
//   for(i = 0; i < l; i++){
//     $('#listContainer').find('ul').append('<li><a role="button" class="product">' + storage.products[i].name +'</a></li>')
//   }
// }
// //display the item card for the clicked product
// var showProduct = function (current) {
//   var source = $('#item-card').html();
//   var template = Handlebars.compile(source);
//   $('#cardContainer').empty();
//   index = current.parent().index();
//   var newHtml = template(storage.products[index]);
//   $('#cardContainer').append(newHtml);
//   $('.deletebox').data().id = index;;
// }
// //remove a product from the products array
// var removeProduct = function (index){
//   storage.products.splice(index,1);
//   storage.set();
//   $('#cardContainer').empty();
//   listProducts();
// }
// //listener for the product submit button
// $('.submit-product').on('click', function(e) {
//   e.preventDefault();
//   //getting information from the form
//   var name = $(this).parent().find('#product-name').val();
//   var price = $(this).parent().find('#product-price').val();
//   var url = $(this).parent().find('#product-img').val();
//   var prod = {name:name,price:price,url:url};
//   $('.showa').toggleClass('showa');
//   var success = addProduct(prod);

//   // cleaning the form
//   if(success){
//     $(this).parent().find('#product-name').val('');
//     $(this).parent().find('#product-price').val('');
//     $(this).parent().find('#product-img').val('');
//   } 
// });

// //listener for a click on the list display button
// $('.list-products').on('click', function(){
//   listProducts();
// });
// //listener for a click on a product in the list
// $('#listContainer').on('click','.product',function(){
//   showProduct($(this));
// });
// //listener for the delete button on product card
// $('#cardContainer').on('click', '.deletebox', function () {
//   removeProduct($(this).data().id);
// });
// //listener for a click on the create product form title, to toggle the view
// $('.create-title').on('click',function(){
//   $('.item-form').toggleClass('show');
// });
// //listener for a click on the amazon search form title, to toggle the view
// $('.search-title').on('click',function(){
//   $('.search-form').toggleClass('show');
// });

// var storage = Storage();
// function fetch (name) {
//   $.ajax({
//     method: "GET",
//     url: 'http://localhost:8080',
//     dataType: "json",
//     success: function(data) {
//       console.log(data);
//       $('body').append('<p>' + JSON.stringify(data) + '</p>');
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(textStatus);
//     }
//   });
// }