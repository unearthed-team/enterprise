/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    location: {
      geojson: 'json'
    },
    tag: 'text',
    geozone: {
      collection: 'geozone',
      via: 'id'
    }
  }
};

