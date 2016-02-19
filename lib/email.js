/**
 * Created by Brew on 12/24/2015.
 */
if(Meteor.isServer){
  // In your server code: define a method that the client can call
  Meteor.methods({
    sendEmail: function (to, from, subject, text) {
      check([to, from, subject, text], [String]);

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();

      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }
  });

  Meteor.startup(function(){
    //process.env.MAIL_URL = 'smtp://brewcrew@sandbox06c5c01f1c5c44d7b6606fd3b78c904c.mailgun.org:Ifthen10@smtp.mailgun.org:587';
  });
}
