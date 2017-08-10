import Ember from 'ember';

export default Ember.Route.extend({
  //Takes a model with parameters
  model(params) {
    //returns a record from the store for category1 which is the blog name
    return this.store.findRecord('blog_name');
  }
});
