var express = require("express");
const session = require('express-session');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'starkey'}));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  
 res.render("index");
});

app.post('/result', function(req, res) {
    console.log(req.body.name)
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
 
 res.render("result", {name: req.session.name, location: req.session.location, language: req.session.language, comment: req.session.comment});
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});