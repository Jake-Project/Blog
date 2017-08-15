import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveRegistration(){
      //Get the data from the hbs form
      const user = this.get('username');
      const paswrd = this.get('password');
      const email = this.get('email');

      const newRegistrant = this.store.createRecord('registration', {username:user, password:paswrd, email:email});
      newRegistrant.save();
    }
  }

});
