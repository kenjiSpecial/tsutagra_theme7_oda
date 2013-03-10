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
    var styles = [
        {
            stylers: [
                { hue: "#000" },
                { saturation: -100 }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },
        {
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

