
var express = require('express');
var app = express();
var path = require ("path");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/foo'));

// set the home page route
app.get('/', function(req, res) {
   // res.json({'some':'value'});
    // ejs render automatically looks in the views folder

   // res.render('thingspeak.html');
      res.sendFile(path.join(__dirname+'/thingspeak.html'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


// console.log('Hi Vighnesh')
