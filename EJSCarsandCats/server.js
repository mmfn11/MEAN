const express = require("express");

const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/cats", (req, res) => {
    // hard-coded user data
   
    res.render('cats');
 })
app.get("/cars", (req, res) => {
    // hard-coded user data
   
    res.render('cars');
 })
 app.get("/form", (req, res) => {
    // hard-coded user data
   
    res.render('form');
 })

  
 
