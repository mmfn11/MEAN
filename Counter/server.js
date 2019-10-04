var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})) 


var count=0;

app.get('/', (req, res) => {
    count++;
    res.render("index",{count: count});
});

app.post('/plus', function(req, res) {
    count ++;
    res.redirect("/");
})

app.post('/del', function(req, res) {
    count = 0;
    res.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});