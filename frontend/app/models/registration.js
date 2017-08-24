import DS from 'ember-data';

export default DS.Model.extend({
  //.attr() method defines type the model will accept
  username: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string')
});
