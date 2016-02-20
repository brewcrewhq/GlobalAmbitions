/**
 * Created by Brew on 2/19/2016.
 */
Template.create.events({
  'submit form': function(event, template){
    // prevent the form from actually posting
    event.preventDefault();
    // get the values of the form needed to create a new product
    var imgAltVal = template.find('#productAlt').value;
    var typeVal = template.find('#productType').value;
    var descriptionVal = template.find('#productDescription').value;
    var priceVal = template.find('#productPrice').value;

    var files = event.target[0].files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        if (err){
          // handle error
          console.log(err);
        } else {
          // handle success depending what you need to do
          var imagesURL = "/cfs/files/images/" + fileObj._id;
          Products.insert({
            'imagePath': imagesURL,
            'imgAlt': imgAltVal,
            'type': typeVal,
            'description': descriptionVal,
            'price': priceVal}, function(err, product){
            if(err){
              console.log(err);
            } else {
              console.log(product);
            }
          });
        }
      });
    }

  }
});

