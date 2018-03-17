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
            $("#yelpLogo").html('<br><a target="_blank" href="www.yelp.com"><img src="/assets/images/yelp/yelp_logo.png" style="height: 50px;"></a>');

            var picSlides = $('<div/>', {
                id: "pictures",
                html: '<img src=' + data.yelpBusiness.yelpBusiness.photos[0] + ' class="mySlides" width="200px"><img src=' + data.yelpBusiness.yelpBusiness.photos[1] + ' class="mySlides" width="200px"><img src=' + data.yelpBusiness.yelpBusiness.photos[2] + ' class="mySlides" width="200px">'
            });

            $('#listingPics').html(picSlides);

            var slideIndex = 0;
            carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none"; 
                }
                slideIndex++;
                if (slideIndex > x.length) {slideIndex = 1} 
                x[slideIndex-1].style.display = "block"; 
                setTimeout(carousel, 4000); // Change image every 2 seconds
            }

            var reviews = $("<div/>", {
                id: "yelpReviews"
            });

            $("#listingReviews").html(reviews);

            switch (data.yelpResult.yelpResult.rating) {
                case 0:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_0.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 1:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_1.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 1.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_1_half.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 2:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_2.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 2.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_2_half.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 3:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_3.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 3.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_3_half.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 4:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/4star.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 4.5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_4_half.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
                case 5:
                    $('<div/>', {
                        id: "overallRating",
                        class: "overall",
                        html: '<img src="/assets/images/yelp/small_5.png"> <a target="_blank" href="' + data.yelpResult.yelpResult.url + '">  out of ' + data.yelpResult.yelpResult.review_count + ' reviews.</a><br>'
                    }).appendTo('#yelpReviews');
                    break;
            }

            for (i = 0; i < data.yelpReviews.yelpReviews.length; i++) {
                switch (data.yelpReviews.yelpReviews[i].rating) {
                    case 0:
                        ratingImg = "/assets/images/yelp/small_0.png";
                        break;
                    case 1:
                        ratingImg = "/assets/images/yelp/small_1.png";
                        break;
                    case 2:
                        ratingImg = "/assets/images/yelp/small_2.png";
                        break;
                    case 3:
                        ratingImg = "/assets/images/yelp/small_3.png";
                        break;
                    case 4:
                        ratingImg = "/assets/images/yelp/4star.png";
                        break;
                    case 5:
                        ratingImg = "/assets/images/yelp/small_5.png";
                        break;
                }
                $("<div/>", {
                    id: "review" + i,
                    class: "reviews",
                    html: '<br><img src=' + ratingImg + '> by ' + data.yelpReviews.yelpReviews[i].user.name + '<br>' + data.yelpReviews.yelpReviews[i].text + ' <a target="_blank" href="' + data.yelpReviews.yelpReviews[i].url + '"> Read Full Review</a>'
                }).appendTo("#yelpReviews");
            }
        });

        $("#listingModal").modal('show');
    });

    $('#listingModal').on('hidden.bs.modal', function() {
        $("#listingName").html("");
        $("#listingAddress1").html("");
        $("#listingAddress2").html("");
        $("#listingPhone").html("");
        $("#listingType").html("");
        $("#listingPrice").html("");
        $("#listingDescrip").html("");
        $("#listingReviews").html("");
        $('#listingPics').html("");
        $('#yelpLogo').html("");
    })
});
