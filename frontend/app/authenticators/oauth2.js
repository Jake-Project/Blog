//import authentication to use
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';

//Export the authentication type that will be used
export default OAuth2PasswordGrantAuthenticator.extend({

  authenticate(username, password){
    console.log(username);
    console.log(password);

    //return new JSON('helloworld', 'helloworld');
  //return new Promise((resolve, reject) => resolve(true);})
  return Promise.resolve(true);
  }


});
