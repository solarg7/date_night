// Dependencies
var db = require("../models");
var yelp = require('yelp-fusion');
var client = yelp.client('X65JXP2eMuK3l8n8Rs5gIFInDSqrn5OtZiP_b3z1RwTlWWP3NaBs6_ZtmvHInaFJkJDnpFR_mfOGcRAowL7i14IjdIRicG-etTgV7vIwAZE16JospPAJqeDMwYOqWnYx');
//Routes

module.exports = function(app) {
    app.get("/api/restaurant/city/:location", function(req, res) {
        var query = req.params.location;
        db.Restaurant.findAll({
            where: {
                city: query
            } 
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/restaurant", function(req, res) {
        db.Restaurant.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/restaurant/id/:id", function(req, res) {
        var query = req.params.id;
        db.Restaurant.findOne({
            where: {
                id: query
            }
        }).then(function(results) {
            client.search({
                term: results.name,
                location: results.city + ", " + results.state
            }).then(response => {
                yelpResult = response.jsonBody.businesses[0];
                //console.log(response.jsonBody.businesses[0].name);
                client.reviews(response.jsonBody.businesses[0].id).then(reviewsResponse => {
                    yelpReviews = reviewsResponse.jsonBody.reviews;
                    client.business(response.jsonBody.businesses[0].id).then(businessResponse => {
                        yelpBusiness = businessResponse.jsonBody;

                        res.json({
                            dbResult: {results},
                            yelpResult: {yelpResult},
                            yelpReviews: {yelpReviews},
                            yelpBusiness: {yelpBusiness}
                        });
                    })
                });
            }).catch(e => {
                console.log(e);
            });
        });
    });

    app.post("/api/restaurant", function(req, res) {
        db.Restaurant.create(req.body).then(function(results) {
            res.json(results);
        });
    });
}