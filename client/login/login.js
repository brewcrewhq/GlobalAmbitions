/**
 * Created by Brew on 12/23/2015.
 */
"use strict";

if(Meteor.isClient) {
  Template.login.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#login-email').value;
      var passwordVar = template.find('#login-password').value;
      Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });
  Template.register.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      });
    }
  });
}