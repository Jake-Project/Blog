//import authentication to use
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';

const { RSVP, inject: { service } } = Ember;

//Export the authentication type that will be used
export default OAuth2PasswordGrantAuthenticator.extend({

  ajax: Ember.inject.service(),

  authenticate(username, password){
    console.log(username);
    console.log(password);

//Send a promice to exprtess with username and password to be resolved
///get express to search database
  var pinky = this.get('ajax').request('http://localhost:3000/api/authenticate', {
    method: 'POST',
    data: {
      username: username,
      password: password
    }
  })

  return pinky.then((result) => {
    console.log(result)
    var obj = result;
    console.log(obj.registration)
    console.log(obj);
    console.log("philadelphia born and raised")
    // if(pinky["error"]){
    if(result.error){
      console.log("error exists - let's reject")
      var message = pinky["error"];
      return Promise.reject(message);
    } else {
      console.log("s'all good man")
      var message = pinky;
      return Promise.resolve(message);
    }
  })

  // return new Promise()(
  //   function(resolve, reject){
    //   if(pinky["error"]){
    //   var message = pinky["error"];
    //   reject(message);
    // }
    // else{
    //   var message = pinky;
    //   resolve(message);
    // }
  //   }
  // )

  }


});
