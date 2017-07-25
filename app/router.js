import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in', { path: '/sign-in' });
  this.route('sign-up', { path: '/sign-up' });
});

export default Router;
