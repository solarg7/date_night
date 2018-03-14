$(document).ready(function() {
    $.get("/api/restaurant", function(data) {
        for (i = 0; i < data.length; i++) {
            $('<li/>', {
                id: 'rest' + i,
                text: data[i].name
            }).appendTo("#restList");
        }
    });

    $.get("/api/event", function(data) {
        for (i = 0; i < data.length; i++) {
            $('<li/>', {
                id: 'event' + i,
                text: data[i].name
            }).appendTo("#eventList");
        }
    });

});