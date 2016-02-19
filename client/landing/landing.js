/**
 * Created by Brew on 1/6/2016.
 */
Template.landing.rendered = function(){
  $('.shirt-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
};

Template.landing.events({
  'click .btn-primary': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
});