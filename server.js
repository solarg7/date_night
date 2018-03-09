var express = require("express");
var app = express();
var ejs = require("ejs");

app.set('view engine', 'ejs');

var PORT = process.env.PORT || 3000;

var bodyParser = require("body-parser");

//we can remove this later
app.locals.eat = require('./db/eat.json');

app.get('/', function(req,res){
  res.render('layouts/index');
});
app.get('/results', function(req,res){
  res.render('layouts/results');
});
app.get('/post', function(req,res){
  res.render('layouts/post');
});

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});


// Set Handlebars.
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

