var request = require('request');

var url = 'http://api.open-notify.org/iss-now.json';

request({url: url}, function(error, response, body){
    var latitude = (JSON.parse(body).iss_position.latitude).toFixed(2);
    var longitude = (JSON.parse(body).iss_position.longitude).toFixed(2);
    console.log("The ISS is currently located at a latitude of " + latitude + " and at a longitude of " + longitude + ".");
});

