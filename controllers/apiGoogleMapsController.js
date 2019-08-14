const gMaps = require('@google/maps');

const API_KEY_MAPS = "AIzaSyA_6XoZiSeNA-OKDn_oHSBfQEtHfB6Qxmg";

const mapsClient = gMaps.createClient({
  key: API_KEY_MAPS,
  Promise: Promise
});

var getLocation = function async () {
  var sessionToken = mapsClient.places.Autocomplete;
  console.log(sessionToken);
  mapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log(err);
  });
}


module.exports.getLocation = getLocation;
