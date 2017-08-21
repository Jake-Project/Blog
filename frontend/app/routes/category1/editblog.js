import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blogpost', params.blogpost_id);
  },

  actions: {

    //Action to save the blog and then go back to category 1
    //IMPORTANT! blogPost can be any name it doesnt matter
    saveBlogPost(blogpost) {
      blogpost.save().then(() => this.transitionTo('category1'));
    },

    willTransition(transition) {

      //Get the model associated with the controller.
      let model = this.controller.get('model');

      //Check it user is trying to leave with forms filled in
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
