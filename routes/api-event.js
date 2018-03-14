// Dependencies
var db = require("../models");

//Routes

module.exports = function(app) {
    app.get("/api/event/:location", function(req, res) {
        var query = req.params.location;
        db.EventPost.findAll({
            where: {
                city: query
            } 
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/event", function(req, res) {
        db.EventPost.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/event/:id", function(req, res) {
        var query = req.params.id;
        db.EventPost.findOne({
            where: {
                id: query
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/event", function(req, res) {
        db.EventPost.create(req.body).then(function(results) {
            res.json(results);
        });
    });
}