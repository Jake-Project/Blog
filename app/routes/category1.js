import Ember from 'ember';

export default Ember.Route.extend({
  //Takes a model with parameters
  model() {
    //returns a record from the store for category1 which is the blog name
    var check = this.store.findAll('registration');
//    debugger;
    return check;
  }
});
