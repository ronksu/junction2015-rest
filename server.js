var express = require('express');
var app = express();

app.set('models', require('./models'));

app.get('/', function(req, res) {
    res.send("Badge Hunt API v0.1");
});

app.get('/badges', function(req, res) {
    var Badge = app.get('models').Badge;

    Badge.findAll().then(function(badges) {
        console.log(badges);
        res.send(badges);
    });

});

app.get('/badges/:id', function(req, res) {
    var Badge = app.get('models').Badge;

    Badge.findById(req.params.id).then(function(badge) {
        console.log(badge);
        res.send(badge);
    });

});

var server = app.listen(8080, '0.0.0.0', function() {
    console.log("Hit me, I am listening at localhost:8080.");
});
