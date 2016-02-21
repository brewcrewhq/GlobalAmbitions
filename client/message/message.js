/**
 * Created by Brew on 12/24/2015.
 */
if(Meteor.isClient){
  Template.message.helpers({
    id: function() {
      var id = FlowRouter.getParam("id");
      return id;
    }
  });
  Template.message.events({
    'submit form': function(event, template) {
      event.preventDefault();
      Session.set('redirectAfterLogin', undefined);
      delete Session.keys.redirectAfterLogin;
      // In your client code: asynchronously send an email
      Meteor.call('sendEmail',
        //'larrykentbrewer@gmail.com',
        'carlosacontreras@icloud.com',
        Meteor.user().emails[0].address,
        'Message from Global Ambitions.',
        template.find('#message').value
      );
      FlowRouter.go('landing');
    }
  });
}
