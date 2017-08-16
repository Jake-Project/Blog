import Ember from 'ember';
import DS from 'ember-data';
//import FirebaseAdapter from 'emberfire/adapters/firebase';

//const { inject } = Ember;

//export default FirebaseAdapter.extend({
//  firebase: inject.service(),
//});

//export default DS.Adapter.extend({

//});

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  trustedHosts: [
    'http://localhost:3000',
  ]
});
