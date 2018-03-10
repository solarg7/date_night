var path = require("path");

module.exports = function(app) {
    // Home page render
    app.get('/', function(req,res){
        res.render('layouts/index');
    });
    // Results Page Render
    app.get('/results', function(req,res){
        res.render('layouts/results');
    });
    // Post Page Render
    app.get('/post', function(req,res){
        res.render('layouts/post');
    });
}