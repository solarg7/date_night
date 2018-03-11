// Dependencies
var db = require("../models");

//Routes

module.exports = function(app) {
    app.get("/api/restaurant/:location", function(req, res) {
        var query = req.params.location;
        db.Restaurant.findAll({
            where: {
                city: query
            } 
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/restaurant/:id", function(req, res) {
        var query = req.params.id;
        db.Restaurant.findOne({
            where: {
                id: query
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/restaurant", function(req, res) {
        db.Restaurant.create(req.body).then(function(results) {
            res.json(results);
        });
    });
}