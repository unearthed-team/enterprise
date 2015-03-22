/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    location: 'json',
    tag: 'text',
    active: 'boolean',
    zone: {
      collection: 'zone',
      via: 'device'
    }
  }
};
