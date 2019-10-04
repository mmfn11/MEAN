
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    response.render('cats');
})

app.get("/lily", function(request, response){
    var cat_array = [
        {name: "lily", food: "Salmon", age: "4", sleep1: "anywhere", sleep2: "under bed "}
    ];
    response.render('details', {cat: cat_array});
})

app.get("/cuddles", function(request, response){
    var cat_array = [
        {name: "cuddles", food: "spaghetti", age: "3", sleep1: "under bed", sleep2: "nywhere"}
    ];
    response.render('details', {cat: cat_array});
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})