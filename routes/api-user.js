// Dependencies
var db = require("../models");

//Routes

module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        db.User.create(req.body).then(function(results) {
            res.json(results);
        });
    });
}