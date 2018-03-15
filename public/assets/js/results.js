$(document).ready(function() {
    $.get("/api/restaurant", function(data) {
        for (i = 0; i < data.length; i++) {
            $('<li/>', {
                id: 'rest' + i,
            }).appendTo("#restList");

            $('<button/>', {
                class: "btn-listing restaurant" + i,
                id: data[i].id,
                value: data[i].id,
                text: data[i].name
            }).appendTo('#rest' + i);
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

    $("ul").on("click", ".btn-listing", function(event) {
        console.log(this.value);
    });
});
