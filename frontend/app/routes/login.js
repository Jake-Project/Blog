import Ember from 'ember';

//Stops route from being accessible if user is authenticated
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({UnauthenticatedRouteMixin});
