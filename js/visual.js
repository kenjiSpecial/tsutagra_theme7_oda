function drawing_circle(center_pos, value, col){
    var populationOptions = {

        strokeWeight: 0,
        fillColor: col,
        fillOpacity: 0.35,
        map: map,
        center: center_pos,
        radius: value * 300
    };

    var circle = new google.maps.Circle(populationOptions);
}



function drawing_line(countryName, support_pos, supported_pos, rate, col){
    var Coordinates_between_coordinate = [
        support_pos,
        supported_pos
    ];
    var countryPath = new google.maps.Polyline({
        path: Coordinates_between_coordinate,
        strokeColor: col,
        strokeOpacity: 0.6,
        strokeWeight: rate * 100
    });

    countryPath.setVisible(false);
    relation_line_objects[countryName].push(countryPath)

    countryPath.setMap(map);
}