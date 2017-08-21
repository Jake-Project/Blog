import Ember from 'ember';

export default Ember.Route.extend({
  //Takes a model with parameters
  model() {
    //returns a record from the store for category1 which is the blog name
    return this.store.findAll('blogpost');
  },

  actions: {

    deleteBlog(blogpost) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        blogpost.destroyRecord();
      }
    }
  }
});
