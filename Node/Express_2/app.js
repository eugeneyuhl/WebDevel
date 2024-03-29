var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig : "Oink!",
        cow : "Moo",
        dog : "Woof woof!"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:times", function(req, res) {
    var word = req.params.word;
    var times = parseInt(req.params.times);
    var sentence = [];
    for (var i = 0; i < times; i++) {
        sentence.push(word);
    }
    res.send(sentence.join(" "));

});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
})

// Listening
app.listen(3101, process.env.IP, function() {
    console.log("Server started");
});