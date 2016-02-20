/**
 * Created by Brew on 2/19/2016.
 */
Template.productList.helpers({
  products: function(){
    var all = Products.find({}).fetch();
    var chunks = [];
    var size = 3;
    while (all.length > size) {
      chunks.push({ row: all.slice(0, size)});
      all = all.slice(size);
    }
    chunks.push({row: all});
    return chunks;

    //return Products.find();
  }
});
