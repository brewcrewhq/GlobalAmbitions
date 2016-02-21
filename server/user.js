/**
 * Created by Brew on 2/19/2016.
 */
  if(Meteor.users.find().fetch().length === 0){
    var users = [
      {name:"Larry Brewer",email:"larrybrewer@cox.net",roles:['admin']}
    ];

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        email: user.email,
        password: "ifthen",
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
      }

    });
  }
