import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //returns a record from the store for category1 which is the blog name
    return this.store.query('blog', {favorite: true});
  }
});
