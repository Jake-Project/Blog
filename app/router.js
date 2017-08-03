import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ember');
  this.route('category1');
  this.route('category2');
  this.route('contact');
  this.route('about');
});

export default Router;
