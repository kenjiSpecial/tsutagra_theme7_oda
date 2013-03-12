/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/5/13
 * Time: 1:09 PM
 * To change this template use File | Settings | File Templates.
 */



// function for visualization on google map.
initialize();


function initialize() {
    geocoder = new google.maps.Geocoder();
    var styles = [ { "featureType": "water", "stylers": [ { "lightness": 100 } ] },{ "featureType": "landscape", "stylers": [ { "color": "#d0d5d8" } ] },{ "featureType": "administrative.province", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.province", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.locality", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.country", "elementType": "geometry", "stylers": [ { "lightness": 100 }, { "weight": 1.8 } ] },{ "elementType": "labels", "stylers": [ { "lightness": 28 }, { "weight": 0.1 } ] },{ } ];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapOptions = {
        center: new google.maps.LatLng(34.6500, 135.0000),
        zoom: 3,
        mapTypeControl: false,
        streetViewControl: false

    };

    map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

//    reading the json file
    $.getJSON('data/developed_country_data.json',function (data) {
        map_calculation(data, color_support, true);

    }).success(function () {
            console.log("second success");
        })
        .error(function () {
            console.log("error");
        })
        .complete(function () {
            console.log("complete");
        });
    ;

    $.getJSON('data/developing_country_data.json',function (data) {
        map_calculation(data, color_supported, false)

    }).success(function () {
            console.log("second success");
        })
        .error(function () {
            console.log("error");
        })
        .complete(function () {
            console.log("complete");
        });
    ;


//    scaleVal = 60 <- normal value


}

// reading the address from json file


function codeLatLng(map) {
//    34.6500, 135.0000

}

