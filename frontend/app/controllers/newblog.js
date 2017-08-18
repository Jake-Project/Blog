import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveRegistration(){
      //Get the data from the hbs form
      const title = this.get('title');
      const content = this.get('content');

      const newPost = this.store.createRecord('blogpost', {title: title, content: content});
      newPost.save();
    }
  }
});
