import Ember from 'ember';

export default  Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions:{
    authenticate: function authenticate(provider){
      this.get('session').authenticate('authenticator:firebase-simple-auth',{
        provider: provider,
        username: this.get('username'),
        password: this.get('password')
      });
    }
  }
});
