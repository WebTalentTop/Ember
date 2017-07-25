define('rio/router', ['exports', 'ember', 'rio/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('sign-in', { path: '/sign-in' });
    this.route('sign-up', { path: '/sing-up' });
  });

  exports.default = Router;
});