import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  title: '',
  content: '',

  actions: {
    showModal: function(title, content) {
      Ember.set(this, 'title', title);
      Ember.set(this, 'content', content);
      this.toggleProperty('isShowingModal');
    },

    hideModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
