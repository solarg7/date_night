//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var path = require('path');

//Express Server Setup
var app = express();
var PORT = process.env.PORT || 3000;

//Syncing Models
var db = require("./models");

//Setting EJS as view engine
app.set('view engine', 'ejs');

//Setting up the data parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
app.use('/img',express.static(path.join(__dirname, 'public/images')));

app.locals.eat = require('./db/eat.json');


// Routes
require("./routes/api-event.js")(app);
require("./routes/api-restaurant.js")(app);
require("./routes/api-user.js")(app);
require("./routes/html-routes.js")(app);

// Syncing with our database and starting the express server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
