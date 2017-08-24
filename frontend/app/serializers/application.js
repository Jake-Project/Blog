/*
Allows for the standard MongoDB _id to become id.
Sets primary key and creates a method to convert it.
*/

import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  serializeID: function(id){
    return id.toString();
  }
});
