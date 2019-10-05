var express = require("express");
var path = require("path");
var session = require("express-session")
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));



app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(8000)
var count=0;

app.get('/', (req, res) => {
    res.render('index', { count });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    

    socket.on('count_clicked', function (data) {
        count++;
        io.emit('count_response', { response: count });
    });

    socket.on('reset_clicked', function (data){
        count = 0;
        io.emit('reset_response', { response: count });
    });
});