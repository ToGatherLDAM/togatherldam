const request = require('request');
const http = require('http');
const config = require('../config.js');

let getPlacesByName = (place, callback) => {
  let options = {
    url: 'https://api.yelp.com/v3/businesses/search?location=San+Francisco;term=' + place,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.TOKEN}`
    }
  };
  console.log(place);
  request(options, function(err, res, body) {
    if (err) {
      callback(err);
    } else {
      var body = JSON.parse(body);
      console.log(body);
      callback(null, body);
    }
  });
}

module.exports.getPlacesByName = getPlacesByName;
