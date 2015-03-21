/**
* Geozone.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    tag: 'string',
    shape: {
      geojson: 'json'
    },
    description: 'text',
    severity: 'integer',
    device: {
      collection: 'device',
      via: 'id'
    }
  }
};

