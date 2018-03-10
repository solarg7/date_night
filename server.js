//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");

//Express Server Setup
var app = express();
var PORT = 3000;

//Syncing Models
var db = require("./models");

//Setting EJS as view engine
app.set('view engine', 'ejs');

//Setting up the data parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

=======
// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-event.js")(app);
require("./routes/api-restaurant.js")(app);
require("./routes/api-user.js")(app);
require("./routes/html-routes.js")(app);

// Syncing with our database and starting the express server
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
>>>>>>> 59e310e07de9584bcf285e84336866d10658f4c5
