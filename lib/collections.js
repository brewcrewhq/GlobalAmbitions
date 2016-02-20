/**
 * Created by Brew on 2/19/2016.
 */

var imageStore = new FS.Store.GridFS("images", {});

Images = new FS.Collection("images", {
  stores: [imageStore]
});

Images.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  },
  download: function(){
    return true;
  }
});


Products = new Meteor.Collection('products');
Products.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("images", function(){
    return Images.find();
  });
  Meteor.publish("products", function(){
    return Products.find();
  });
}

