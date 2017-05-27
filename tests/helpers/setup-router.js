import Ember from 'ember';

export default function setupRouter(unit) {
  // setup a routing service stub: https://github.com/emberjs/ember-qunit/issues/52
  unit.registry.register('service:-routing', Ember.Object.extend({
    availableRoutes: () => ['index'],
    generateURL: () => '/',
    hasRoute: (name) => name === 'index',
    isActiveForRoute: () => true,
    transitionTo: () => true
  }));
}
