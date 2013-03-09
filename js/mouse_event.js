function country_mouseover(event) {
    var i;
    if (interactive_countries != undefined) {
//            var prev_interactive_countries = relation_line_objects[]
        for (i in interactive_countries) {
            var line = interactive_countries[i];
            line.setVisible(false);
        }

    }

    interactive_countries = relation_line_objects[this.country];

    for (i in interactive_countries) {
        var line = interactive_countries[i];
        line.setVisible(true);
    }

}