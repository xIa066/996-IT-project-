const mongoose = require('mongoose');
const Weather = mongoose.model('weather');

  // Find all weather location details
var findAllWeather = function(req,res){
    Weather.find(function(err,weather){
        if(!err){
            res.send(weather);
        }
        else{
            res.sendStatus(404);
        }
    });
};

  // Find weather data based on city, Case Sensative
var findWeatherByCity = function(req,res){
    var city = req.params.city;
    Weather.find({city:city},function(err,weather){
        if(!err && weather[0] != null){
            res.send(weather);
        }
        else{
            res.sendStatus(404);
        }
    });
};

  // Create new weather
var createWeather = function(req, res){
    var weather = new Weather({
        "city": req.body.city,
        "weatherdesc": req.body.weatherdesc,
        "longitude": req.body.longitude,
        "latitude": req.body.latitude,
        "time": req.body.time
    });
    weather.save(function(err, weather){
        if(!err){
            res.send(weather);
        }
        else{
            res.sendStatus(400);
        }
    });
};

module.exports.findAllWeather = findAllWeather;
module.exports.findWeatherByCity = findWeatherByCity;
module.exports.createWeather = createWeather;
