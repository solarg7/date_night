// Dependencies
var db = require("../models");

// Password Hashing and authentication
const passport = require('passport');
var bcrypt = require("bcrypt");
const saltRounds = 8;
const LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');




//Routes

module.exports = function(passport, app) {
    app.use(session({
        secret: 'datenight cat',
        cookie: {maxAge:60000},
        resave:false,
        saveUninitialized:true
    }));
    app.use(flash());

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(userid, done) {
        db.User.findOne({
            where: {id: userid}
        }).then(function(result) {
            done(result[0]);
        });
    });


    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, useremail, userpassword, done) {
        db.User.findOne({
            where: {email: useremail}
        }).then(function(results) {
            console.log(results);
            console.log("above row object");
            if (results) {
                return done(null, false, req.flash('signupMessage', 'That email is already in use.'));
            }
            else {
                var newUser = {
                email: useremail,
                password: userpassword
                }

                db.User.create({
                    email: newUser.email,
                    password: newUser.password
                }).then(function(rows) {
                    console.log(rows.dataValues.id);
                    newUser.id = rows.dataValues.id;

                    return done(null, newUser);
                });
            }
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, useremail, userpassword, done) {
        db.User.findOne({
            where: {email: useremail}
        }).then(function(results) {
            console.log(results);
            if(!results) {
                return done(null, false, req.flash('loginMessage', 'Email or password are incorrect.'));
            }

            if (results.dataValues.password != userpassword) {
                console.log('didnt work');
                return done(null, false, req.flash('loginMessage', 'Email or password are incorrect'));
            }

            if (results.dataValues.password == userpassword) {
                console.log('worked');
                return done(null, results[0]);
            }
        });
    }));

    app.post('/signup', passport.authenticate('local-signup', { failureRedirect: '/login' }), function(req, res) {
        res.redirect('/');
    });
    
    app.get('/login', function(req, res) {
        res.render('layouts/login');
    });

    app.post('/login', passport.authenticate('local-login', { successReturnToOrRedirect: '/', failureRedirect: '/login' }), function(req, res) {
        res.redirect('/');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn('/login'), function(req, res) {
        console.log('worked?????');
        res.render('layouts/profile', { user: req.user });
    });
};

/*module.exports = function(app) {
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
}*/