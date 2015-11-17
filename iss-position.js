Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
}

var request = require('request');
var prompt = require('prompt');
prompt.start();


function calculateDistance(lat1, lat2, lon1, lon2){
    var R = 6371000; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    
    return d;
}

prompt.get('position', function (err, result) {
    
    var userLocation;
    console.log('Command-line input received:');
    console.log('  location: ' + result.position);
    //We are storing the location that the user provided.
    userLocation = result.position.toLowerCase();
    //We are passing the location to the google api
    var locationGoogle = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ decodeURIComponent(userLocation);
    //We are making a request to find the coordinates of the location provided by the user
    request({url: locationGoogle}, function(error, response, body) {
        var locationGoogleToObject = JSON.parse(body);
        var latGoogle = locationGoogleToObject.results[0].geometry.location.lat;
        var longGoogle = locationGoogleToObject.results[0].geometry.location.lng;
        //We are making another request to find the coordinates of the ISS
        request({url: 'http://api.open-notify.org/iss-now.json'}, function(error, response, body){
            var latitude = (JSON.parse(body).iss_position.latitude);
            var longitude = (JSON.parse(body).iss_position.longitude);
            //We are consoling the result by calling the calculateDistance function and passing the coordinates as attributes.
            console.log("The distance from your location to the ISS is " + calculateDistance(latGoogle, latitude, longGoogle, longitude) + " meters.");
        
        });
    })
});



