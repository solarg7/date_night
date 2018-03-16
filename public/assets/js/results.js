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
        console.log("button worked");
        $.get("/api/restaurant/id/" + this.value, function(data) {
            console.log(data);
            $("#listingName").html(data.dbResult.results.name);
            $("#listingAddress1").html(data.yelpResult.yelpResult.location.display_address[0]);
            $("#listingAddress2").html(data.yelpResult.yelpResult.location.display_address[1]);
            $("#listingPrice").html(data.yelpResult.yelpResult.price);
            $("#listingDescrip").html(data.dbResult.results.description);

            var reviews = $("<div/>", {
                id: "yelpReviews"
            });

            $("#listingReviews").html(reviews);

            for (i = 0; i < data.yelpReviews.yelpReviews.length; i++) {
                $("<p/>", {
                    id: "review" + i,
                    class: "reviews",
                    text: data.yelpReviews.yelpReviews[i].text
                }).appendTo("#yelpReviews");
            }
        });

        $("#listingModal").modal('show');
    });
});
