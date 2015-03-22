/**
* Zone.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    tag: 'string',
    shape: 'json',
    description: 'text',
    severity: 'integer',
    active: 'boolean',
    device: {
      collection: 'device',
      via: 'zone'
    },
    events:{
      collection: 'event',
      via: 'zone'
    },
    updated: {
      type: 'datetime',
      defaultsTo: new Date()
    }
  },
  beforeUpdate: function(values, next) {
    sails.models.zone.find({id: values.id})
    .exec(function(err, original) {
      if (values.updated.getTime() <= new Date(original[0].updated).getTime()) {
        var error = new Error('Not latest.');
        error.status = 404;
        return next(error);
      }
      next();
    })
    
  }
};
