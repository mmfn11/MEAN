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



app.get('/', (req, res) => {

    if (!req.session.counter){
        req.session.counter = 1;
    }
    else {
        req.session.counter +=1;
    }

    res.render("index",{count:req.session.counter});
});

app.post('/plus', function(req, res) {
    req.session.counter +=1;
    res.redirect("/");
})

app.post('/del', function(req, res) {
    req.session.counter = 0;
    res.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});