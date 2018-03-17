$(document).ready(function() {

$("#eventSubmit").on("click", function(event) {
    event.preventDefault();
    var newEvent = {
        event: $("#eventname").val().trim(),
        name: $("#eventLocation").val().trim(),
        eventType: $("#typeevent").val().trim(),
        //street: $("#eventstreet").val().trim(),
        city: $("#eventcity").val().trim(),
        //state: $("#eventstate").val().trim(),
        zip: $("#eventzip").val().trim(),
        //time: $("#time").val().trim(),
        description: $("#eventDescription").val().trim()
    };

    $.post("/api/event", newEvent)
    .then(function(data) {
        console.log(data);
        console.log("added");
    });

    $("#eventForm").each(function() {
        this.reset();
    });
});

$("#restSubmit").on("click", function(event) {
    event.preventDefault();
    var newRestaurant = {
        name: $("#restname").val().trim(),
        //foodType: $("#foodtype").val().trim(),
        //street: $("#reststreet").val().trim(),
        city: $("#restcity").val().trim(),
        //state: $("#reststate").val().trim(),
        zip: $("#restzip").val().trim(),
        description: $("#restDescription").val().trim()
    };

    $.post("/api/restaurant", newRestaurant)
    .then(function(data) {
        console.log(data);
        console.log("added");
    });

    $("#restaurantForm").each(function() {
        this.reset();
    });
});

});