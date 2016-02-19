/**
 * Created by Brew on 2/19/2016.
 */
var Cart = (function() {
  var products = [];
  return {
    add: function(id, price) {
      products.push({
        id: id,
        price: price
      });
    },

    each: function (callback) {
      for (var i=0; i < products.length; i++) {
        callback(products[i].id, products[i].title);
      }
    }
  }
})();