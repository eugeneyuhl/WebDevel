var express = require("express");
var app = express();

app.get("/", function(req, res) {
    // res.send("Welcome to the home page!");
    res.render("home.ejs");
});

// /fallinlovewith/rusty
// You fell in love with Rusty
app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.listen(3101, process.env.IP, function(){
    console.log("Server is listening!!");
});
