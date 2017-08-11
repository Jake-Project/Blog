import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ember');
  //Creates a path for category 1 that links to the blog
  this.route('category1');
  this.route('category2');
  this.route('contact');
  this.route('about');
  this.route('login');
  this.route('register');
  this.route('newblog');
});

export default Router;
