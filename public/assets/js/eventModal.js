$(document).ready(function() {
    $("ul").on("click", ".btn-listing-event", function(event) {
        console.log("button worked");
        $.get("/api/event/id/" + this.value, function(data) {
            console.log(data);
            $("#eventName").html(data.dbResult.results.event);
            $('#eventLocation').html(data.dbResult.results.name);
            $("#eventAddress1").html(data.yelpResult.yelpResult.location.display_address[0]);
            $("#eventAddress2").html(data.yelpResult.yelpResult.location.display_address[1]);
            $("#eventPhone").html(data.yelpResult.yelpResult.display_phone);
            $("#eventType").html(data.yelpResult.yelpResult.categories[0].title);
            $("#eventDescrip").html(data.dbResult.results.description);
            $("#yelpLogoEvent").html('<br><a target="_blank" href="www.yelp.com"><img src="/assets/images/yelp/yelp_logo.png" style="height: 50px;"></a>');

            var picSlides = $('<div/>', {
                id: "pictures",
                html: '<img src=' + data.yelpBusiness.yelpBusiness.photos[0] + ' class="mySlides" width="200px"><img src=' + data.yelpBusiness.yelpBusiness.photos[1] + ' class="mySlides" width="200px"><img src=' + data.yelpBusiness.yelpBusiness.photos[2] + ' class="mySlides" width="200px">'
            });

            $('#eventPics').html(picSlides);

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

            $("#eventReviews").html(reviews);

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

        $("#listing-modal-event").modal('show');
    });

    $('#listing-modal-event').on('hidden.bs.modal', function() {
        $("#eventName").html("");
        $("#eventLocation").html("");
        $("#eventAddress1").html("");
        $("#eventAddress2").html("");
        $("#eventPhone").html("");
        $("#eventType").html("");
        $("#eventDescrip").html("");
        $("#eventReviews").html("");
        $('#eventPics').html("");
        $('#yelpLogoEvent').html("");
    });
});