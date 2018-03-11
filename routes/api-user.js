// Dependencies
var db = require("../models");

// Password Hashing
var bcrypt = require("bcrypt");
const saltRounds = 8;

//Routes

module.exports = function(app) {
    app.post("/api/user", function(req, res) {
        var userInfo = req.body;

        bcrypt.hash(userInfo.password, saltRounds, function(error, hash) {
            db.User.findOrCreate({
                where: {email: userInfo.email},
                
                defaults: {
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                password: hash
                }
            }
            ).spread((user, created) => {
                if (created === false) {
                    res.json("Already Existed");
                }
                else if (created === true) {
                    res.json("Created");
                }
            }) 
        });

        
    });

    app.post("/api/user/authorize", function(req, res) {
        db.User.findOne({
            where:{
                email: req.body.email
            }
        }).then(function(results) {
            bcrypt.compare(req.body.password, results.password, function(error, result) {
                console.log(result);
                res.json(result);
            });
        });
    });
}