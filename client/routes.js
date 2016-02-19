/**
 * Created by Brew on 12/23/2015.
 */
var exposed = FlowRouter.group({});
var loggedIn = FlowRouter.group({
  triggersEnter: [function(){
    if(Meteor.loggingIn() || !Meteor.userId()){
      var route = FlowRouter.current();
      if(route.route.name !== 'login' && route.route.name != 'logout'){
        Session.set('redirectAfterLogin', route.path);
      }
      FlowRouter.go('login');
    }
  }]
});

// Logged In Routes
loggedIn.route('/logout', {
  name: 'logout',
  action: function(){
    Meteor.logout(function(){
      Session.set('redirectAfterLogin', undefined);
      delete Session.keys.redirectAfterLogin;
      FlowRouter.go(FlowRouter.path('landing'));
    })
  }
});

loggedIn.route('/message', {
  name: 'message',
  action: function(){
    BlazeLayout.render('layout', {content: 'message'});
  }
});

// Exposed Routes
exposed.route('/', {
  name: 'landing',
  action: function(){
    BlazeLayout.render('layout', {content: 'landing'});
  }
});

exposed.route('/login', {
  name: 'login',
  action: function(){
    BlazeLayout.render('layout', {content: 'login'});
  }
});
exposed.route('/register', {
  name: 'register',
  action: function(){
    BlazeLayout.render('layout', {content: 'register'});
  }
});

// Event handler for user login
Accounts.onLogin(function(){
  var redirect = Session.get('redirectAfterLogin');
  if(redirect){
    if(redirect !== '/login' && redirect !== '/logout'){
      FlowRouter.go(redirect);
    } else {
      FlowRouter.go('landing');
    }
  } else {
    FlowRouter.go('landing');
  }
});
