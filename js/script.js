/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/5/13
 * Time: 1:09 PM
 * To change this template use File | Settings | File Templates.
 */

// global variables
var geocoder;

// countries which give some money
var countries_g_money;

// countries which receive some money
var countries_r_money;

// function for visualization on google map.
initialize();


function initialize() {
    geocoder = new google.maps.Geocoder();
    var styles = [
        {
            stylers: [
                { hue: "#000" },
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapOptions = {
        center: new google.maps.LatLng(34.6500, 135.0000),
        zoom: 3,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map;

//    reading the json file
    $.getJSON('data/data.json', function(data) {
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        var countries_g_name = data.countries;

        var color_support = "#3498DB";
        var color_supported = "";

//        for(var g_num in countries_g_name){
//            countries which support
        var g_num = 0

            var country_g_lat = countries_g_name[g_num].lat;
            var country_g_lng = countries_g_name[g_num].lng;
            var country_value = countries_g_name[g_num].value;

            var suport_country_center = new google.maps.LatLng( country_g_lat, country_g_lng);

/*
//            ---------------------
//            --  drawing start  --
              *********************
        #drawing for supporting country.#
//            ---------------------
*/

            drawing_circle(suport_country_center, country_value, color_support);

//            -------------------

            var contries_supprted = countries_g_name[g_num].countries;
//            console.log(contries_supprted.length);
            for(var r_num in contries_supprted){
                var supproted_country =contries_supprted[r_num].country;
                var supported_money = contries_supprted[r_num].value;
                console.log( supproted_country + ": " + supported_money);


//                -------------------


            }



//        }




    }).success(function() { console.log("second success"); })
        .error(function() { console.log("error"); })
        .complete(function() { console.log("complete"); });;


    function drawing_circle(center_pos, value, col){
        var populationOptions = {

            strokeWeight: 0,
            fillColor: col,
            fillOpacity: 0.35,
            map: map,
            center: center_pos,
            radius: value * 60
        };

        var circle = new google.maps.Circle(populationOptions);
    }


}

// reading the address from json file


function codeLatLng(map){
//    34.6500, 135.0000

}

