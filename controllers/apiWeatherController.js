const request = require('request');

const API_KEY = process.env.API_KEY || "4a3e5f8f3e17446f335818dab7ea6368";
var lat = "144.9612";
var lng = "37.7964";
var uri = `https://api.darksky.net/forecast/${API_KEY}/${lng},${lat}?units=si`;

var callWeatherAPI = function async (req, res) {

    generateUri(uri)
      .then(response => {
          res.json(response);
      })
      .catch(error => {
          res.send(error)
      })
  }

var findWeatherByLocation = function async (req, res) {
  let lng = req.params.lng.toString();
  let lat = req.params.lat.toString();
  let uri = `https://api.darksky.net/forecast/${API_KEY}/${lng},${lat}?units=si`;
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

module.exports.callWeatherAPI = callWeatherAPI;
module.exports.findWeatherByLocation = findWeatherByLocation;
