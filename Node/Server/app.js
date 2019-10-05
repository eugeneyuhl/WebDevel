var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res) {
    res.send("Hi There!");
})

app.get("/bye", function(req, res) {
    res.send("Bye!");
})

app.get("/r/:subRedditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
    res.send("Welcome to SubReddit!");
})

// UNDEFINED
app.get("*", function(req, res) {
    res.send("No page found");
})

// Listening
app.listen(3101, process.env.IP, function() {
    console.log("Server started");
});