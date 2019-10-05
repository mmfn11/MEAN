var express = require("express");
var app = express();
var server = app.listen(8000);
var io = require("socket.io")(server);
var color = "";


app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


io.on("connection", function(socket){
    
    socket.emit("launch", {
        gbp : color
    });
    socket.broadcast.emit("launch", {
        gbp : color
    });

    socket.on("green_page", function(){
        socket.emit("green_1");
        socket.broadcast.emit("green_1");
        color = "green"
    });
    socket.on("blue_page", function(){
        socket.emit("blue_1");
        socket.broadcast.emit("blue_1");
        color = "blue"
    });
    socket.on("pink_page", function(){
        socket.emit("pink_1");
        socket.broadcast.emit("pink_1");
        color = "pink"
    });
});

app.get("/", function(req, res){
    
    res.render("index");
});