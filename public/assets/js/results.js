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
            $("#listingPhone").html(data.yelpResult.yelpResult.display_phone);
            $("#listingType").html(data.yelpResult.yelpResult.categories[0].title);
            $("#listingPrice").html(data.yelpResult.yelpResult.price);
            $("#listingDescrip").html(data.dbResult.results.description);

            var reviews = $("<div/>", {
                id: "yelpReviews"
            });

            $("#listingReviews").html(reviews);

            switch (data.yelpResult.yelpResult.rating) {
                case 0:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_0.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 1:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_1.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 1.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_1_half.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 2:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_2.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 2.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_2_half.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 3:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_3.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 3.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_3_half.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 4:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_4.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 4.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_4_half.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
                case 5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="../images/yelp/small_5.png"> <a href="' + data.yelpResult.yelpResult.url + '"> out of ' + data.yelpResult.yelpResult.review_count + 'reviews.</a>'
                    }).appendTo('#yelpReviews');
                    break;
            }

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
