const request = require('request');

const API_KEY_BIKE = process.env.API_KEY_BIKE || "clLpwjk8Kv2jnPeVaEeQEYPkE";
var lng = "144.9612";
var lat = "-37.7964";
const radius = 1000;

var findBikeParkingByLocation = function async (req, res) {

  let lat = req.params.lat.toString();
  let lng = req.params.lng.toString();
  var uri = `https://data.melbourne.vic.gov.au/resource/8fgn-5q6t.json?$where=within_circle(geometry,%20${lat},%20${lng},%20${radius})&%24%24app_token=${API_KEY_BIKE}`;

    generateUri(uri)
      .then(response => {
          res.json(response);
      })
      .catch(error => {
          res.send(error)
      })
  }

var generateUri = function(uri){
    return new Promise((resolve, reject) => {
        request(uri, { json: true }, (err, res, body) => {
          if (err) reject(err)
          resolve(body)
        });
    })
}

module.exports.findBikeParkingByLocation = findBikeParkingByLocation;
