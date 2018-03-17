$(document).ready(function() {
    //$.get("/api/restaurant", function(data) {
    //    for (i = 0; i < data.length; i++) {
    //        $('<li/>', {
    //            id: 'rest' + i,
    //        }).appendTo("#restList");
    //
    //        $('<button/>', {
    //            class: "btn-listing restaurant" + i,
    //            id: data[i].id,
    //            value: data[i].id,
    //            text: data[i].name
    //        }).appendTo('#rest' + i);
    //    }
    //});

    //$.get("/api/event", function(data) {
    //    for (i = 0; i < data.length; i++) {
    //        $('<li/>', {
    //            id: 'event' + i,
    //            text: data[i].name
    //        }).appendTo("#eventList");
    //    }
    //});

    $('.resultSearch').on('click', function(event) {
        event.preventDefault();
        var locationSearch = $('.locationSearch').val().trim();

        $.get('/api/restaurant/city/' + locationSearch, function(data) {
            for (i = 0; i < data.length; i++) {
                $('<li/>', {
                    id: 'rest' + i,
                }).appendTo("#restList");
    
                $('<button/>', {
                    class: "btn-listing-rest btn-listing restaurant" + i,
                    id: data[i].id,
                    value: data[i].id,
                    text: data[i].name
                }).appendTo('#rest' + i);
            }
        });

        $.get('/api/event/city/' + locationSearch, function(data) {
            for (i = 0; i < data.length; i++) {
                $('<li/>', {
                    id: 'event' + i,
                }).appendTo("#eventList");
    
                $('<button/>', {
                    class: "btn-listing-event btn-listing event" + i,
                    id: data[i].id,
                    value: data[i].id,
                    text: data[i].event
                }).appendTo('#event' + i);
            }
        });

        $("#results-container").show(1000);
        $("#home-module").hide(1000);
    });
});
