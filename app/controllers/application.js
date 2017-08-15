import Ember from 'ember';

export default Ember.Controller.extend({
    //Inject the service throughout the project
    session: Ember.inject.service('session'),



    //Call method to invalidate session and log the user out
    actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
