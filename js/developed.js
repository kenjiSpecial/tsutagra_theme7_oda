function developed_country_setting(data){
    var countries_g_name = data.countries;


    for (var g_num in countries_g_name) {
//            countries which support
//        var g_num = 0

//        variable relating to supporting country
        var support_lat = countries_g_name[g_num].lat;
        var support_lng = countries_g_name[g_num].lng;
        support_money = countries_g_name[g_num].value;
        var support_country = countries_g_name[g_num].country;


//        creating the relation line objects array
        relation_line_objects[support_country] = [];
        support_center = new google.maps.LatLng(support_lat, support_lng);


        var contries_supprted = countries_g_name[g_num].countries;
//            console.log(contries_supprted.length);
        var lastNum = contries_supprted.length - 1;
        var sonotaMoney = contries_supprted[lastNum].value

        for (var r_num in contries_supprted) {
            if (r_num < lastNum) {
                var supproted_country = contries_supprted[r_num].country;
                var supported_lng = contries_supprted[r_num].lng;
                var supported_lat = contries_supprted[r_num].lat;
                var supported_center = new google.maps.LatLng(supported_lat, supported_lng);
                var supported_money = contries_supprted[r_num].value;


                if (supported_money > 0) {
                    drawing_line(support_country, support_center, supported_center, supported_money / (support_money - sonotaMoney), color_support)
                }

//                -------------------
            }

        }
        /*
         drawing for supporting country.
         */

//        drawing_circle(support_center, support_money, color_support);
        var populationOptions = {
            strokeWeight: 0,
            fillColor: color_support,
            fillOpacity: 0.35,
            map: map,
            center: support_center,
            radius: support_money * 60
        };

        support_country_circle = new google.maps.Circle(populationOptions);
        support_country_circle.country = support_country;

        // Add a listener for the click event
        google.maps.event.addListener(support_country_circle, 'mouseover', country_mouseover);

    }
}